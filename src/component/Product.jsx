import React, { useState } from 'react'

const Product = ({panier,product,key,addPanier}) => {
    const [isDisabled,setIsDisabled]=useState(false)
        const handleClick=()=>{
            setIsDisabled(true)
            addPanier([...panier,product])
        }
        return(
                <div key={key} className='bg-light m-1 rounded p-3'>
                    <img src={product.image} alt="" />
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <h5>Price: {product.price}</h5>
                    <button className='btn btn-success m-1' disabled={isDisabled} onClick={handleClick} >{isDisabled?'Produit est ajouté':'Ajouter au Panier'}</button>
                </div>
            
            )
        
    
    
}

export default Product
