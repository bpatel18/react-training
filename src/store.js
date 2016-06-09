import { createStore } from 'redux';
import { combineReducers } from 'redux';
import products from './reducers/products-reducer';
import carts from './reducers/cart-reducer';
import ac from './images/ac.JPG';
import freeze from './images/freeze.JPG';
import cooler from './images/cooler.JPG';
import tv from './images/tv.JPG';
import laptop from './images/laptop.JPG';

const finalReducer = combineReducers({ products, carts });

let state = {
    products: [
        {
            name: "AC",
            price: 8000,
            quantity: 10,
            image: ac
        },
        {
            name: "Freeze",
            price: 10000,
            quantity: 10,
            image: freeze
        },
        {
            name: "Cooler",
            price: 5000,
            quantity: 10,
            image: cooler
        },
        {
            name: "Television",
            price: 7000,
            quantity: 10,
            image: tv
        },
        {
            name: "Laptop",
            price: 20000,
            quantity: 10,
            image: laptop
        }
    ],
    carts: { products: [], amount: 0}
};
export const store = createStore(finalReducer, state);
