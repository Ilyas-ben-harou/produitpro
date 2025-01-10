export let initialState = {
    panier: []
};

export const configPanier = (state, action) => {
    let exist = state.panier.find((item) => item.id === action.payload.id);
    switch(action.type) {
        case 'ADD_ITEM': 
            if (exist) {
                exist = { ...exist, 'price': exist.totalPrice += exist.price, 'qte': exist.qte += 1 }
                initialState.panier=[...initialState.panier]
            } else {
                initialState.panier=[...initialState.panier, { ...action.payload, 'qte': 1 }]
            }
            
            return { ...state, panier: initialState.panier };
        case 'ADD_ITEMS': 
            if (exist) {
                exist = { ...exist, 'price': exist.totalPrice += exist.price, 'qte': exist.qte += action.payload.qte }
                initialState.panier=[...initialState.panier]
            } else {
                initialState.panier=[...initialState.panier, { ...action.payload, 'qte': action.payload.qte }]
            }
            
            return { ...state, panier: initialState.panier };
        
        case 'REMOVE_ITEM':
            if (exist.qte>1) {
                exist = { ...exist, 'price': exist.totalPrice -= exist.price, 'qte': exist.qte -= 1 }
                initialState.panier=[...initialState.panier]
            } else {
                initialState.panier = initialState.panier.filter((item) => item.id !== action.payload.id);
            }
            return { ...state, panier: initialState.panier };
        
        default:
            return state;
    }
};
