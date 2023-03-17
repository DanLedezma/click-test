import React from 'react'

export const ProductsItem = ({id, nombre, descripcion, fabricante, sku, precio}) => {
    return (
        <>
            <div className='product_item-content'>
                <div className="product_item-description">
                    <div className="product_item-image">
                        <img src="https://picsum.photos/150/150" alt="Product" />
                    </div>
                    <div className="product_item-info">
                        <span className='title'>{nombre}</span>
                        <div className=''>
                            <b>Descripcion:</b>&nbsp;
                            <span>{descripcion}</span>
                        </div>
                        <div className=''>
                            <b>Fabricante:</b>&nbsp;
                            <span>{fabricante}</span>
                        </div>
                        <div className=''>
                            <b>Articulo Id:</b>&nbsp;
                            <span>{sku}</span>
                        </div>
                        <div className=''>
                            <b>Precio:</b>&nbsp;
                            <span>${precio}</span>
                        </div>
                    </div>
                </div>
                <div className="product_item-car-box">
                    <span className='title'>Configura tus productos.</span>
                    <p className='avility'>
                        <b>Cuantos quieres?</b>
                        <span>Disponible de # a # </span>
                    </p>
                    <div className="disponibility">
                        <button>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </button>
                        <input 
                            id="" 
                            name="" 
                            type="number" 
                            placeholder='Numero de licencias'
                        />
                    </div>
                    <div className='addCar'>
                        <span> Total: $ </span>
                        <button>
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}
