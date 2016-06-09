import React from 'react';
import { connect } from 'react-redux';

let Product = (props) => {
    let product = { productid: props.productid, name: props.name, price: props.price, quantity: props.quantity, image: props.image };
    //style={{backgroundImage: 'url('+props.image+')', backgroundSize: '100px 100px'}};
    return (
      <div style={{display: 'inline-block', borderStyle: 'dotted', borderWidth: 'thin', padding: '10', margin: '10'}}>
        <img src={props.image} height='100' width='120'/><br/>
        Name: { props.name }<br/>
        Price: { props.price }<br/>
        Quantity: { props.quantity }<br/><br/>
        <button style={{borderRadius:'5px'}} onClick={() => { props.addToCart(product); } }>Add Product</button><br/><br/>
        <button style={{borderRadius:'5px'}} onClick={() => { props.addAllQntToCart(product); } }>Add All Product</button>
      </div>
    );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (value) => {
      dispatch({type: "ADD_TO_CART", value});
    },
    addAllQntToCart: (value) => {
      dispatch({type: "ADD_ALL_QNT_TO_CART", value});
    }
  };
};

Product = connect(null, mapDispatchToProps)(Product);

export default Product;
