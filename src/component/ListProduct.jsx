import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './Product'

const ListProduct = ({data}) => {
    const [panier,setPanier]=useState([])
    const [isClicked,setIsClicked]=useState(true)
    const [TotalProduct,setTotalProduct]=useState() 

    useEffect(()=>{
        
        setTotalProduct(panier.reduce((acc,item)=>acc+item.qte,0))
    },[panier])
    
    const removePanier=(item)=>{
        let exist=panier.find((product)=>item.id===product.id)
        if(exist.qte===1){
            setPanier(panier.filter(i=>i.id!==item.id))
        }else{
            exist.totalPrice-=exist.price
            exist.qte-=1
            setPanier([...panier])
        }
        
    }
    

    const displayPanier=()=>{
        if(panier.length===0){
            return <h1>Votre panier est vide</h1>
        }
        return(
            panier.map((item, index) => {
                return (
                    
                    <div key={index} className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                        <img className="w-full h-48" src={item.image} alt={item.title}/>
                        <div className="p-4">
                        <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                        <p className="mt-2 text-gray-600">
                            {item.description}
                        </p>
                        <h5 className="text-xl font-semibold text-gray-800">Price: {item.price}</h5>
                        <h5 className="text-xl font-semibold text-gray-800">Total Price: {item.totalPrice}</h5>
                        <h6 className="mt-2 text-gray-600">Quantity: {item.qte}</h6>
                        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition" onClick={()=>removePanier(item)} >
                            Delete au Panier
                        </button>
                        </div>
                    </div>
                )
            })
        )
    }
    const displayNavBar=()=>{
        
        return(
            <nav className="bg-gray-800 p-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition" onClick={()=>setIsClicked(true)}>List Products</button>
                    <button className="mt-4 flex bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition" onClick={()=>setIsClicked(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        {panier.length>0?
                            <span style={{backgroundColor:'gray'}} className='px-2 ml-2 rounded-full'>{TotalProduct}</span>
                            :
                                ''
                        }
                        

                    </button>
                </div>
            </nav>
            
        )
    }

    if(!isClicked){
        return(
            <div className="container-fluid bg-secondary">
                {displayNavBar()}
                <div className='mt-3'>
                    <h2>Nombre des Produits : {panier.length}</h2>
                    <div className='flex justify-around items-center m-auto flex-wrap text-center'>
                        {displayPanier()}
                    </div>
                    <h4>Total prix :{panier.reduce((acc,item)=>acc+item.totalPrice,0)}</h4>
                </div>
                
            </div>
        )
    }

    return (
        <div className="container-fluid bg-secondary">
            {displayNavBar()}
            <div className='mt-3'>
                <h2>Liste des Produits</h2>
                <h2>Nombre des Produits : {data.length}</h2>
                <div className='flex justify-around items-center m-auto flex-wrap text-center'>
                    {data.map((item, index) =><Product  product={item} key={index} panier={panier} addPanier={setPanier} /> )}
                    
                </div>
            </div>
            
        </div>
        
    )
}

export default ListProduct
