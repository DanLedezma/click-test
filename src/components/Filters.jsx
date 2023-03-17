import React, { useEffect, useState } from 'react'

export const Filters = ({onFilter}) => {
    const [state, setState] = useState()

    useEffect(() => { onFilter(state) }, [state])
    
    return (
        <>
            <div className='filters-content'>
                <div className="filters-title">
                    <h1>Suscripciones</h1>
                    <span>Precio mas IVA</span>
                </div>
                <div className="filters-filter">
                    <label htmlFor="filter">
                        Filtrar por:
                    </label>
                    <select name="filter" id="" onChange={({target}) => setState(target.value)}>
                        <option value="">Todos los fabricantes</option>
                        <option value="Microsoft">Microsoft</option>
                        <option value="Autodesk">Autodesk</option>
                        <option value="VMWARE">VMWARE</option>
                    </select>
                </div>
            </div>
            <hr />
        </>
    )
}
