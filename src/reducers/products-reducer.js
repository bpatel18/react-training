
const getProductItemIndex = (productlist, product) => {
    if(product === undefined) {
        return -1;
    }
    for(let i=0; i < productlist.length; i++) {
        if(productlist[i].name === product.name) {
            return i;
        }
    }
    return -1;
};

export default (state = [], action) => {
    let index = getProductItemIndex(state, action.value);
    switch (action.type) {
        case 'ADD_TO_CART':
            if(state[index].quantity !== 0) {
                return [...state.slice(0, index),
                    Object.assign({}, state[index], {quantity: state[index].quantity - 1}),
                    ...state.slice(index + 1)
                ];
            } else {
                return state;
            }
        case 'ADD_ALL_QNT_TO_CART':
            if(state[index].quantity !== 0) {
                return [...state.slice(0,index),
                    Object.assign({}, state[index], {quantity: state[index].quantity - state[index].quantity}),
                    ...state.slice(index + 1)
                ];
            } else {
              return state;
            }
        case 'ADD_QNT_TO_CART':
            if(state[index].quantity !== 0) {
                if(state[index].quantity >= action.txtQnt) {
                    return [...state.slice(0,index),
                        Object.assign({}, state[index], {quantity: state[index].quantity - action.txtQnt}),
                        ...state.slice(index + 1)
                    ];
                } else {
                    alert("Sorry!!!");
                    return state;
                }
            } else {
              return state;
            }
        case 'REMOVE_FROM_CART':
            return [...state.slice(0, index),
                Object.assign({}, state[index], {quantity: state[index].quantity + 1}),
                ...state.slice(index + 1)
            ];
        case 'REMOVE_ALL_QNT_FROM_CART':
            return [...state.slice(0, index),
                Object.assign({}, state[index], {quantity: state[index].quantity + action.value.quantity}),
                ...state.slice(index + 1)
            ];
        default:
            return state;
    }
}
