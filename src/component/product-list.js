import React from 'react';
import Product from './product';
import { connect } from 'react-redux';

let ProductList = ({ productslist }) => {
    let prodList = productslist.map((product, index) => {
        return <Product key={index} productid={index} name={product.name} price={product.price} quantity={product.quantity} image={product.image}/>
    });
    return (<div>
        <h3>Product List</h3>
        {prodList}
    </div>);
};

const mapStateToProps = (state) => {
  return {
    productslist: state.products
  };
};

ProductList = connect(mapStateToProps, null)(ProductList);

export default ProductList;
