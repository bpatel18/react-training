import React from 'react';
import { connect } from 'react-redux';
import CartProduct from './cart-product';

let CartList = ({ cartlist }) => {
    let productList = cartlist.products.map((product, index) => {
        return <CartProduct key={index} productid={index} name={product.name} price={product.price}
                            quantity={product.quantity} amount={product.amount} image={product.image}/>
    });
    return (<div><h3>Cart Products</h3>
        {productList}<br/>
        <h3>Total Amount: {cartlist.amount}</h3>
    </div>);
};

const mapStateToProps = (state) => {
  return {
    cartlist: state.carts
  };
};

CartList = connect(mapStateToProps, null)(CartList);

export default CartList;
