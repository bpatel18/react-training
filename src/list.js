import React from 'react';

class List extends React.Component {

  constructor() {
    super();
    this.todos = [];
    this.addToList = this.addToList.bind(this);
  }

  render() {
    let liItems = this.todos.map((val, index) => {
      return (<li key={index}>{val}</li>);
    });
    return (<ul>{liItems}</ul>);
  }

  addToList(value) {
    this.todos.push(value);
    this.setState(this.todos);
  }
  
}

export default List;
