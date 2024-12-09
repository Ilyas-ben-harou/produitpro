// MyPanier.jsx

import React from 'react'
import './MyPanier.css'


const MyPanier = (props) => {
    
    if (!props.panier || props.panier.length===0){
        return  <h1>0 Produit</h1>
    }

        
    const prixTotal=props.panier.reduce((acc,p)=>acc+p.price,0)
    return (
        <div>
            <h2>My Panier:</h2>
            <h2>Nombre de produits: {props.panier.length}</h2>
            <div className='ListProduits'>

                {props.panier.map((produit, index) => (
                    <div className="produit">
                    <img src={produit.image} alt={produit.title} />
                    <h3>{produit.title}</h3>
                    <p>{produit.description}</p>
                    <h5>Prix: {produit.price}MAD</h5>
                    <button onClick={() => props.handleDeletePanier(index)}>Delete From Panier</button>
                </div>
                ))}
                
            </div>
            <h1>Prix total de Produits : {prixTotal}</h1>
        </div>
    )
}
        
    


export default MyPanier
