import React from 'react'
import Panier from './Panier'
import NavBar from '../NavBar/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { clear } from './../ConfigRedux/configPanier'

const PanierList = () => {
    const panier=useSelector(state=>state.panier.panier)
    const dispatch=useDispatch()
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
                <div onClick={()=>dispatch(clear())} className='bg-red-500 w-[50px] p-4 text-white text-center rounded-md'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>
                    </span>
                    

                </div>
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