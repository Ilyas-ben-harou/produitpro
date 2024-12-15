import React from 'react'

const Product = ({panier,product,key,addPanier}) => {
    const handleClick=()=>{
        let exist=panier.find((item)=>item.id===product.id)
        console.log('exist',exist)
        if(exist){
            exist={...exist,'price':exist.totalPrice+=exist.price,'qte':exist.qte+=1}
        }else{
            addPanier([...panier,{...product,'qte':1}])
        }
    }
    return(
            <div key={key} className='bg-light m-1 rounded p-3'>
                <img src={product.image} alt="" />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <h5>Price: {product.price}</h5>
                <button className='btn btn-success m-1' onClick={handleClick} >Ajouter au Panier</button>
            </div>
        
        )
        
    
    
}

export default Product
