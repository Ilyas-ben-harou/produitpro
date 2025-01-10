// app11.js

import React, { useState } from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import {data} from './data/data.js'
import ListProduct from './ListProducts/ListProducts.jsx';
import ListPanier from './ListPanier/ListPanier.jsx';
import NavBar from './NavBar/NavBar.jsx'

const App = () => {
    const [panier,setPanier]=useState([])
    
    console.log(panier)
    return(
        <BrowserRouter className="text-center">
            <NavBar panier={panier}/>
            <Routes>
                <Route path='/'>
                    <Route index element={<ListProduct setPanier={setPanier} panier={panier} products={data}/>}/>
                    <Route path='/panier' element={<ListPanier setPanier={setPanier} panier={panier} />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
