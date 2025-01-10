// app11.js

import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import ListProduct from './ListProducts/ListProducts.jsx';
import ListPanier from './ListPanier/ListPanier.jsx';
import Product from './ListProducts/Product.jsx';

const App = () => {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<ListProduct  />}/>
                    <Route path='/panier' element={<ListPanier />}/>
                    <Route path='/product/:id' element={<Product />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;