import { createSlice } from '@reduxjs/toolkit';

const panierSlice = createSlice({
    name: 'panier',
    initialState: {
        panier: [],
    },
    reducers: {
        addItem: (state, action) => {
            const exist = state.panier.find((item) => item.id === action.payload.id);
            if (exist) {
                state.panier = state.panier.map(item =>
                    item.id === exist.id
                        ? {
                            ...item,
                            totalPrice: item.price * (item.qte + 1),
                            qte: item.qte + 1
                        }
                        : item
                );
            } else {
                state.panier.push({
                    ...action.payload,
                    qte: 1,
                    totalPrice: action.payload.price
                });
            }
        },
        removeItem: (state, action) => {
            const exist = state.panier.find((item) => item.id === action.payload);
            if (exist.qte > 1) {
                state.panier = state.panier.map(item =>
                    item.id === exist.id
                        ? {
                            ...item,
                            totalPrice: item.totalPrice - item.price,
                            qte: item.qte - 1
                        }
                        : item
                );
            } else {
                state.panier = state.panier.filter((item) => item.id !== action.payload);
            }
        },
        clear: (state) => {
            state.panier = [];
        },
    }
});

export const { addItem, removeItem, clear } = panierSlice.actions;
export default panierSlice.reducer;