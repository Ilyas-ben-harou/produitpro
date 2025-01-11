import React, {  useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { data } from '../data/data'
import NavBar from '../NavBar/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../ConfigRedux/configPanier'

const Product = () => {
    const panier=useSelector(state=>state.panier.panier)
    const dispatch=useDispatch()

    const [qte,setQte]=useState(1)

    let {id}=useParams()    

    const product=data.find(item=>item.id===parseInt(id))
    const newProduct={...product,qte:qte,totalPrice:product.price*qte}
    
    console.log(panier)
    return (
        <div className="container">
            <div>
                <NavBar/>
            </div>
            <div className='container flex justify-center '>
                <Link to='produitpro/' className='m-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </Link>
                <div className='items-center text-center'>
                    <img style={{width:'400px',height:'400px'}} src={product.image} alt={product.title} />
                </div>
                <div className='pt-7 pl-4'>
                    <h2 className='text-3xl font-bold m-4'>{product.title}</h2>
                    <p className='text-3xl font-medium m-4'>{product.description}</p>
                    <p className='text-3xl font-medium m-4'>Price: {product.price}</p>
                    <div className='flex items-center m-4'>
                        <div>
                            
                            <p className='text-3xl font-medium pr-1'>Quantity:</p>
                        </div>
                        <div className='w-full flex justify-between items-center ml-2 border-2 border-black p-2'>
                            <button onClick={()=>setQte(qte+1)}><span className='text-2xl'>+</span> </button>
                            <span className='text-2xl'>{qte}</span>
                            <button disabled={qte===1?true:false} onClick={()=>setQte(qte-1)}><span className='text-2xl'>-</span> </button>
                        </div>
                    </div>
                    
                    <h3 className='text-3xl font-bold m-4'>Total prix: {qte===1?product.price:product.price*qte}</h3>
                    <button 
                        className="mt-4 border-2 border-blue-800 bg-white text-black px-4 py-2 rounded hover:bg-blue-800  hover:text-white transition"
                        onClick={()=>dispatch(addItem(newProduct))}
                    >
                        Ajouter au Panier
                    </button>
                </div>

            </div>
        </div>
        
    )
}

export default Product
