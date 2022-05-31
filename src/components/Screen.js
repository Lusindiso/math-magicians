import React, { Component } from 'react';
import './Screen.css';

class Screen extends Component {
  
  render() {
    const { total, next } = this.props.value;
    return  <div className="screen">{next || total}</div>
  }
}

export default Screen;
