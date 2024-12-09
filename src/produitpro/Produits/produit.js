// produit.js
import React,{ useState } from 'react';
import './produit.css'



export let panier=[];
const Produit = (props) => {
    const [isDisbled,setIsDisbled]=useState(false)

    
    return (
        <div className="produit">
            <img src={props.produit.image} alt={props.produit.title} />
            <h3>{props.produit.title}</h3>
            <p>{props.produit.description}</p>
            <h5>Prix: {props.produit.price}MAD</h5>
            <button onClick={()=>{
                props.handleAddPanier(props.index)
                setIsDisbled(true)
            }} 
            disabled={isDisbled}
            type='button' >
                {isDisbled?'Produit est ajouté':'Ajouter au panier'}
            </button>
        </div>
    )
}

export default Produit;