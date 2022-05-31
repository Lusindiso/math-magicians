import React, { Component } from 'react';
import Button from '../Button';
import './Last.css';

const list = ["÷", "x", "-", "+", "="];
class Last extends Component {
  render() {
    const { handleClick } = this.props;
    return (
			<div className="last">
				{list.map((el) => (
					<Button value={el} key={el} handleClick={handleClick} />
				))}
			</div>
		);
  }
}

export default Last;
