import React from 'react';

import ProductList from './product-list';
import CartList from './cart-list';

class MainComp extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div><ProductList/><CartList/></div>
    );
  }
  
}

export default MainComp;
