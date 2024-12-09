// app11.js

import React,{useState} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout/Layout.jsx';
import ListProduits from './Produits/listProduits.jsx';
import MyPanier from "./panier/MyPanier.jsx";
import {Data} from './data.js'
import './Produits/listProduits.css'

const App11 = () => {
    const [panier,setPanier]=useState([])

    function handleAddPanier(i){
        setPanier([...panier , Data[i]])
        alert(`le ${Data[i].title} est ajouter dans le panier`)
    }

    function handleDeletePanier(i){
        setPanier(panier.filter((_,index)=>i!==index))
    }

    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Layout />}>
                
                    <Route index element={<ListProduits handleAddPanier={handleAddPanier} data={Data}/>}/>
                    <Route path='MyPanier' element={<MyPanier handleDeletePanier={handleDeletePanier} panier={panier} />}/>
                </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App11;