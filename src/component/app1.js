// app11.js

import React from 'react';
import {Data} from './data.js'
import ListProduct from './ListProduct.jsx';

const App11 = () => {
    return(
        <div>
            
            <ListProduct data={Data} />
        </div>
    )
}

export default App11;