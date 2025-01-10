import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../ConfigRedux/configPanier'

const Panier = ({ item }) => {
    const dispatch=useDispatch()
    const handleDelete = (id) => {
        if (window.confirm('Voulez-vous vraiment supprimer cet user?')) {
            dispatch(removeItem(id));
        }
    };
    return (
        <div className="max-w-sm mx-auto my-4 bg-white p-2 shadow-md rounded-lg text-center overflow-hidden hover:scale-x-110 transition">
            <img className="w-full h-48 object-cover hover:scale-105 transition" src={item.image} alt={item.title} />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                <p className="mt-2 text-gray-600">{item.description}</p>
                <h5 className="text-xl font-semibold text-gray-800">Price: {item.price}</h5>
                <h5 className="text-xl font-semibold text-gray-800">Total Price: {item.totalPrice}</h5>
                <h6 className="mt-2 text-gray-600">Quantity: {item.qte || 1}</h6>
                <button 
                    className="mt-4 border-2 border-blue-800 bg-white text-black px-4 py-2 rounded hover:bg-blue-800  hover:text-white transition " 
                    onClick={() => handleDelete(item.id)}
                >
                    Supprimer du Panier
                </button>
            </div>
        </div>
    )
}

export default Panier