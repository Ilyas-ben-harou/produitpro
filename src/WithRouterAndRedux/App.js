
import React from 'react';
import { Routes,Route} from 'react-router-dom'
import ListProduct from './ListProducts/ListProducts.jsx';
import ListPanier from './ListPanier/ListPanier.jsx';
import Product from './ListProducts/Product.jsx';
import { Provider } from 'react-redux';
import { store } from './store.js';
import { HashRouter } from 'react-router-dom'

const App = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path='/'>
                        <Route index element={<ListProduct />} />
                        <Route path='panier' element={<ListPanier />} />
                        <Route path='product/:id' element={<Product />} />
                    </Route>
                </Routes>
            </HashRouter>
        </Provider>
    )
}
export default App;