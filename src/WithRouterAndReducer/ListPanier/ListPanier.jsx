import React, { useReducer } from 'react'
import Panier from './Panier'
import { configPanier, initialState } from '../ConfigReducer/configPanier'
import NavBar from '../NavBar/NavBar'

const PanierList = () => {
    const [panier,dispatch]=useReducer(configPanier,initialState)
    
    const totalProducts=initialState.panier.reduce((acc,item)=>acc+item.qte,0)
    if (initialState.panier.length === 0) {
        return <div>
            <NavBar/>
            <h1 className='text-4xl font-bold text-center my-4'>
                Votre panier est vide
            </h1>    
        </div>
    }

    return (
        <div className='bg-slate-600'>
            <NavBar/>
            <div >
                <div>
                <h1 className='text-2xl font-bold  my-4'>
                    Nombre de produits: {totalProducts}
                </h1>   
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
                    
                    {initialState.panier.map((item) => (
                        <Panier 
                            key={item.id}
                            item={item} 
                            panier={panier}
                            dispatch={dispatch} 
                        />
                    ))}
                </div>
            </div>
            
        </div>
        
    )
}

export default PanierList