import React from 'react'
import Panier from './Panier'
import NavBar from '../NavBar/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { clear } from './../ConfigRedux/configPanier'

const PanierList = () => {
    const panier = useSelector(state => state.panier.panier)
    const dispatch = useDispatch()
    
    const totalProducts = panier.reduce((acc, item) => acc + item.qte, 0)

    if (panier.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900">
                <NavBar />
                <div className="flex flex-col items-center justify-center min-h-[50vh]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-slate-400 mb-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <h1 className='text-4xl font-bold text-center text-white mb-2'>
                        Votre panier est vide
                    </h1>
                    <p className="text-slate-400">Ajoutez des articles pour commencer vos achats</p>
                </div>
            </div>
        )
    }

    return (
        <div className='min-h-screen bg-gradient-to-b from-slate-800 to-slate-900'>
            <NavBar />
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-4">
                        <h1 className='text-2xl font-bold text-white'>
                            Mon Panier <span className="text-slate-400">({totalProducts} articles)</span>
                        </h1>
                    </div>
                    <button 
                        onClick={() => dispatch(clear())}
                        className='flex items-center gap-2 bg-red-500 hover:bg-red-600 transition-colors px-4 py-2 text-white rounded-lg shadow-lg hover:shadow-xl'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>
                        Vider le panier
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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