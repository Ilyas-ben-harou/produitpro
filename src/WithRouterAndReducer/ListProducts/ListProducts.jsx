import React, { useReducer } from 'react'
import Cart from './Cart'
import { data } from './../data/data'
import { configPanier, initialState } from '../ConfigReducer/configPanier'
import NavBar from '../NavBar/NavBar'

const ListProducts = () => {
    const [panier,dispatch]=useReducer(configPanier,initialState)
    
    return (
        <div className='bg-slate-600'>
            <NavBar/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((product) => (
                    <Cart
                        key={product.id} 
                        product={product} 
                        panier={panier}
                        dispatch={dispatch} 
                    />
                ))}
            </div>
        </div>
        
    )
}

export default ListProducts