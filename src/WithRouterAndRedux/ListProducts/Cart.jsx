import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItem } from '../ConfigRedux/configPanier'

const Cart = ({ product }) => {
    const dispatch=useDispatch()
    return (
        <div className="w-[300px] mx-auto my-4 bg-white p-2 shadow-md rounded-lg text-center overflow-hidden hover:scale-105 transition cursor-pointer">
            <Link to={`produitpro/product/${product.id}`} className="max-w-sm mx-auto my-4 bg-white p-2 shadow-md rounded-lg text-center overflow-hidden hover:scale-x-110 transition cursor-pointer">
                <img 
                    className="w-full h-48 object-cover hover:scale-105 transition" 
                    src={product.image} 
                    alt={product.title} 
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {product.title}
                    </h2>
                    <p className="mt-2 text-gray-600">
                        {product.description}
                    </p>
                    <h5 className="text-lg font-medium">
                        Price: {product.price.toFixed(2)} $
                    </h5>
                </div>
            </Link>
            
            
                <button 
                    className="my-4 border-2 border-blue-800 bg-white text-black px-4 py-2 rounded hover:bg-blue-800  hover:text-white transition"
                    onClick={()=>dispatch(addItem(product))}
                >
                    Ajouter au Panier
                </button>
        </div>
    )
}

export default Cart