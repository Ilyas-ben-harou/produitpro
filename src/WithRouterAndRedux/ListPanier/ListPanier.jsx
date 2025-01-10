import React from 'react'
import Panier from './Panier'
import NavBar from '../NavBar/NavBar'
import { useSelector } from 'react-redux'

const PanierList = () => {
    const panier=useSelector(state=>state.panier.panier)
    console.log(panier)
    
    const totalProducts=panier.reduce((acc,item)=>acc+item.qte,0)
    if (panier.length === 0) {
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
                    
                    {panier.map((item) => (
                        <Panier 
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
            </div>
            
        </div>
        
    )
}

export default PanierList