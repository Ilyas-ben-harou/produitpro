import { configureStore } from '@reduxjs/toolkit';
import panierSlice from './ConfigRedux/configPanier'
import indexSlice from './ConfigRedux/configIndex'

export const store = configureStore({
    reducer: {
        panier:panierSlice,
        index:indexSlice
    }
});