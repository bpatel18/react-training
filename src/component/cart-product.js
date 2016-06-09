import React from 'react';
import { connect } from 'react-redux';

let CartProduct = (props) => {
    let product = { productid: props.productid, name: props.name, price: props.price, quantity: props.quantity, image:props.image };
    return (
      <div style={{display: 'inline-block', borderStyle: 'dotted', borderWidth: 'thin', padding: '10', margin: '10'}}>
        <img src={props.image} height='100' width='120'/><br/>
        Name: { props.name }<br/>
        Price: { props.price }<br/>
        Quantity: { props.quantity }<br/>
        Amount: { props.amount }<br/><br/>
        <button style={{borderRadius:'5px'}} onClick={() => { props.removeFromCart(product); } }>Remove Product</button><br/><br/>
        <button style={{borderRadius:'5px'}} onClick={() => { props.removeAllQntFromCart(product); } }>Remove All Product</button>
      </div>
    );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (value) => {
      dispatch({type: "REMOVE_FROM_CART", value});
    },
    removeAllQntFromCart: (value) => {
      dispatch({type: "REMOVE_ALL_QNT_FROM_CART", value});
    }
  };
};

CartProduct = connect(null, mapDispatchToProps)(CartProduct);

export default CartProduct;
