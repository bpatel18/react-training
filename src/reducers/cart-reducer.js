const getProductIndex = (products, product) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === product.name) {
            return i;
        }
    }
    return -1;
};

export default (state = { products: []}, action) => {
    let index = getProductIndex(state.products, action.value);
    switch (action.type) {
        case 'ADD_TO_CART':
            if (action.value.quantity !== 0) {
                if (index === -1) {
                    return Object.assign({}, state, {
                            products: [...state.products, Object.assign({}, action.value, {quantity: 1, amount: action.value.price})]
                        },
                        {amount: state.amount === undefined ? action.value.price : state.amount + action.value.price}
                    );
                } else {
                    return Object.assign({}, state, {
                            products: [...state.products.slice(0, index),
                                Object.assign({}, action.value,
                                    {
                                        quantity: state.products[index].quantity + 1,
                                        amount: action.value.price * (state.products[index].quantity + 1)
                                    }
                                ),
                                ...state.products.slice(index + 1)
                            ]
                        },
                        {amount : state.amount + action.value.price}
                    );
                }
            } else {
                return state;
            }
        case 'ADD_ALL_QNT_TO_CART':
            if (action.value.quantity !== 0) {
                if (index === -1) {
                    return Object.assign({}, state, {
                            products: [...state.products, Object.assign({}, action.value,
                                {quantity: action.value.quantity, amount: (action.value.price * action.value.quantity)})]
                        },
                        {amount: state.amount === undefined ? (action.value.price * action.value.quantity) :
                                                              state.amount + (action.value.price * action.value.quantity)}
                    );
                } else {
                    return Object.assign({}, state, {
                            products: [...state.products.slice(0, index),
                                Object.assign({}, action.value,
                                    {
                                        quantity: state.products[index].quantity + action.value.quantity,
                                        amount: action.value.price * (state.products[index].quantity + action.value.quantity)
                                    }
                                ),
                                ...state.products.slice(index + 1)
                            ]
                        },
                        {amount : state.amount + (action.value.price * action.value.quantity)}
                    );
                }
            } else {
                return state;
            }
        case 'REMOVE_FROM_CART':
            if (action.value.quantity > 1) {
                return Object.assign({}, state, {
                        products: [...state.products.slice(0, index),
                            Object.assign({}, action.value,
                                {
                                    quantity: state.products[index].quantity - 1,
                                    amount: action.value.price * (state.products[index].quantity - 1)
                                }
                            ),
                            ...state.products.slice(index + 1)
                        ]
                    },
                    {amount : state.amount - action.value.price}
                );
            } else {
                return Object.assign({}, state, {
                        products: [...state.products.slice(0, index),
                            ...state.products.slice(index + 1)
                        ]
                    },
                    {amount: state.amount - action.value.price}
                );
            }
        case 'REMOVE_ALL_QNT_FROM_CART':
            return Object.assign({}, state, {
                    products: [...state.products.slice(0, index),
                        ...state.products.slice(index + 1)
                    ]
                },
                {amount: state.amount - (action.value.price * action.value.quantity)}
            );
        default:
            return state;
    }
};
