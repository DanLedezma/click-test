import React, { useEffect, useState } from 'react'

import { Filters } from '../components/Filters'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { ProductsItem } from '../components/ProductsItem'

import { Data as Products } from '../data/Data'

export const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        setData(Products)
    }, [])
    

    const handleFilters = (maker) => {
        if (!maker) return
        const newProducts = Products.filter(item => (item.attributes.fabricante === maker))
        setData(newProducts)
    }

    const handleSearch = (search) => {
        if (!search) {
            setData(Products)
        }
        const newProducts = Products.filter(item => {
            if (item.attributes.nombre.includes(search) || item.attributes.sku.includes(search)) {
                return item
            }
        })
        setData(newProducts)
    }


    return (
        <>
            <NavBar onSearch={handleSearch} />
            <div className="container content">
                <Filters onFilter={handleFilters} />
                { data?.map(item => <ProductsItem key={item.id} {...item.attributes} /> )}
            </div>
            <Footer />
        </>
    )
}
