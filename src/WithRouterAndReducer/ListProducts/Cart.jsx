import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({ product, dispatch }) => {
    return (
        <Link to={`/product/${product.id}`} className="max-w-sm mx-auto my-4 bg-white p-2 shadow-md rounded-lg text-center overflow-hidden hover:scale-x-110 transition cursor-pointer">
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
                <button 
                    className="mt-4 border-2 border-blue-800 bg-white text-black px-4 py-2 rounded hover:bg-blue-800  hover:text-white transition"
                    onClick={()=>dispatch({type:'ADD_ITEM',payload:product})}
                >
                    Ajouter au Panier
                </button>
            </div>
        </Link>
    )
}

export default Cart