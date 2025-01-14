import React from 'react'

const Product = ({ panier, product, key, addPanier }) => {
    const handleClick = () => {
        let exist = panier.find((item) => item.id === product.id)
        if (exist) {
            exist = { ...exist, 'price': exist.totalPrice += exist.price, 'qte': exist.qte += 1 }
            addPanier([...panier])
        } else {
            addPanier([...panier, { ...product, 'qte': 1 }])
        }
    }
    return (


        <div key={key} className="max-w-sm mx-auto my-4 bg-white p-2 shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-48" src={product.image} alt={product.title} />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                <p className="mt-2 text-gray-600">
                    {product.description}
                </p>
                <h5>Price: {product.price}</h5>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition" onClick={handleClick} >
                    Ajouter au Panier
                </button>
            </div>
        </div>

    )



}

export default Product