import React from 'react';

class InputComp extends React.Component {

  constructor() {
    super();
    this.buttonClick = this.buttonClick.bind(this);
  }

  render() {
    return (<div><input type="text" ref="inp"/><button onClick={this.buttonClick}>Add</button></div>);
  }

  buttonClick() {
    //alert(this.refs.inp.value);
    this.props.buttonClick(this.refs.inp.value);
  }
}

export default InputComp;
