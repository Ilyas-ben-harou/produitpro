
import { createSlice } from '@reduxjs/toolkit';

const panierSlice = createSlice({
    name: 'panier',
    initialState: {
        panier: [],
    },
    reducers: {
        addItem: (state, action) => {
            let exist = state.panier.find((item) => item.id === action.payload.id);
            if (exist) {
                exist = { ...exist, 'totalPrice': exist.totalPrice += exist.price, 'qte': exist.qte += 1 }
                state.panier = state.panier.map(item => item.id === exist.id && exist);
            } else {
                state.panier=[...state.panier, { ...action.payload, 'qte': 1 }]
            }
        },
        removeItem: (state, action) => {
            let exist = state.panier.find((item) => item.id === action.payload);
            if (exist.qte>1) {
                exist = { ...exist, 'price': exist.totalPrice -= exist.price, 'qte': exist.qte -= 1 }
                state.panier = state.panier.map(item => item.id === exist.id && exist);
            } else {
                state.panier = state.panier.filter((item) => item.id !== action.payload);
            }
        },
        clear: (state) => {
            state.panier = []
        },
    }
});

export const { addItem,removeItem,clear } = panierSlice.actions;
export default panierSlice.reducer;