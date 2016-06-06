import React from 'react';

import InputComp from './input-comp';
import List from './list';

class MainComp extends React.Component {

  constructor() {
    super();
    this.buttonClick = this.buttonClick.bind(this);
    this.addToList = this.addToList.bind(this);
  }

  render() {
    return (<div><InputComp buttonClick={this.buttonClick}/><List ref="todos"/></div>);
  }

  buttonClick(value) {
    this.addToList(value);
  }

  addToList(value) {
    this.refs.todos.addToList(value);
  }
}

export default MainComp;
