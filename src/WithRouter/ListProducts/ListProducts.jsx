import React from 'react'
import Product from './Product'

const ListProducts = ({ products,setPanier,panier }) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-600">
            {products.map((product) => (
                <Product 
                    key={product.id} 
                    product={product} 
                    setPanier={setPanier} 
                    panier={panier}
                />
            ))}
        </div>
    )
}

export default ListProducts