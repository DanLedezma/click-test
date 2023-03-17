import React, { useState } from 'react'
import logo from '../assets/logo.jpeg'

export const NavBar = ({onSearch}) => {

    const [state, setState] = useState('')

    const handelSearch = () => {
        onSearch(state)
        setState('')
    }

    return (
        <header>
            <div className="header_logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="header_menu">
                <ul className="menu">
                    <li className='op-1' >
                        <i class="fa-solid fa-bag-shopping"></i>
                        <span>Ver todos los productos</span>
                    </li>
                    <li className='op-2'>
                        <i class="fa-solid fa-building"></i>
                        <span>Cliente</span>
                    </li>
                    <li className='op-3'>
                        <i class="fa-solid fa-atom"></i>
                        <span>Siclik</span>
                    </li>
                    <li className='op-4'>
                        <i class="fa-solid fa-ticket"></i>
                        <span>Soporte</span>
                    </li>
                    <li className='op-5'>
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span>0</span>
                    </li>
                    <li className='op-6'>
                        <i class="fa-solid fa-user"></i>
                    </li>
                </ul>
                <div className="search">
                    <input 
                        type="text" 
                        placeholder='Buscar un producto'
                        onChange={({target})=>setState(target.value)}
                        value={state}
                    />
                    <button onClick={handelSearch}>Buscar</button>
                </div>
            </div>
        </header>
    )
}
