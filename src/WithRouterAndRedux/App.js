// app11.js

import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import ListProduct from './ListProducts/ListProducts.jsx';
import ListPanier from './ListPanier/ListPanier.jsx';
import Product from './ListProducts/Product.jsx';
import { Provider } from 'react-redux';
import { store } from './store.js';

const App = () => {
    
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/'>
                        <Route index element={<ListProduct  />}/>
                        <Route path='/panier' element={<ListPanier />}/>
                        <Route path='/product/:id' element={<Product />}/>
                    </Route>
                </Routes>
        </BrowserRouter>
        </Provider>
        
    )
}

export default App;