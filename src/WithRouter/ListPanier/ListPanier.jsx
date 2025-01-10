import React from 'react'
import Panier from './Panier'

const PanierList = ({setPanier,panier}) => {
    if(panier.lenght===undefined){
        return(
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>Cart empty</h1>
            </div>
        )
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-600">
            {panier.map((item) => (
                <Panier 
                    item={item} 
                    setPanier={setPanier} 
                    panier={panier}
                />
            ))}
        </div>
    )
}

export default PanierList