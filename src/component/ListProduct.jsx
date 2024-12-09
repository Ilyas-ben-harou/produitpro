import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './Product'

const ListProduct = ({data}) => {
    const [panier,setPanier]=useState([])
    const [isClicked,setIsClicked]=useState(true)

    
    const removePanier=(item)=>{
        setPanier(panier.filter(i=>i.id!==item.id))
    }
    

    const displayPanier=()=>{
        if(panier.length===0){
            return <h1>Votre panier est vide</h1>
        }
        return(
            panier.map((item, index) => {
                return (
                    <div key={index} className='bg-light m-1 rounded p-3'>
                        <img src={item.image} alt="" />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <h5>Price: {item.price}</h5>
                        <button className='btn btn-success m-1' onClick={()=>removePanier(item)} >Delete au Panier</button>
                    </div>
                )
            })
        )
    }
    const displayNavBar=()=>{
        return(
            <div className="d-flex bg-dark justify-content-around p-4">
                <button className="btn btn-light text-dark" onClick={()=>setIsClicked(true)}>List Products</button>
                <button className="btn btn-light text-dark" onClick={()=>setIsClicked(false)}>Panier</button>
            </div>
        )
    }

    if(!isClicked){
        return(
            <div className="container-fluid bg-secondary">
                {displayNavBar()}
                <div className='mt-3'>
                    <h2>Nombre des Produits : {panier.length}</h2>
                    <div className='d-flex justify-content-around flex-wrap text-center'>
                        {displayPanier()}
                    </div>
                    <h4>Total prix :{panier.reduce((acc,item)=>acc+item.price,0)}</h4>
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
                <div className='d-flex justify-content-around flex-wrap text-center'>
                    {data.map((item, index) =><Product  product={item} key={index} panier={panier} addPanier={setPanier}/> )}
                    
                </div>
            </div>
            
        </div>
        
    )
}

export default ListProduct
