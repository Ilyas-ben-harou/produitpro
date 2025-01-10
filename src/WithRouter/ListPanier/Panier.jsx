import React from 'react'

const Panier = ({ item, setPanier,panier }) => {
    console.log('panier',panier)
    const handleClick=()=>{
        let exist = panier.find((product) => product.id === item.id)
        if (exist.qte>1) {
            exist = { ...exist, 'price': exist.totalPrice -= exist.price, 'qte': exist.qte -= 1 }
            setPanier([...panier])
        } else {
            setPanier(panier.filter((product)=>product.id!==item.id))
        }
    }
    return (
        <div className="max-w-sm mx-auto my-4 bg-white p-2 shadow-md rounded-lg overflow-hidden">
            <img 
                className="w-full h-48 object-cover" 
                src={item.image} 
                alt={item.title} 
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                    {item.title}
                </h2>
                <p className="mt-2 text-gray-600">
                    {item.description}
                </p>
                <h5 className="text-lg font-medium">
                    Price:{item.price} $
                </h5>
                <h5 className="text-xl font-semibold text-gray-800">Total Price: {item.totalPrice }</h5>
                <h6 className="mt-2 text-gray-600">Quantity: {item.qte }</h6>
                <button 
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition" 
                    onClick={handleClick} 
                >
                    Supprimer du Panier
                </button>
            </div>
        </div>
    )
}

export default Panier