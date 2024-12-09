// listProduits.jsx

import Produit from './produit'
import './listProduits.css'


import React from 'react';

const listProduits = (props) => {
    const handleAddPanier=(i)=>props.handleAddPanier(i)
    return (
        <div>
            <h2>Liste des Produits:</h2>
            <h2>Nombre de produits: {props.data.length}</h2>
            <div className='ListProduits'>

                {props.data.map((produit, index) => (
                    <Produit index={index} handleAddPanier={handleAddPanier} produit={produit} />
                ))}
            </div>
        </div>
    )
}

export default listProduits

