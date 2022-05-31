import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
	
	render() {
		const { value, handleClick } = this.props;
		return (
			<button className={`button ${value === '0' ? 'btn' : ''}`} onClick={()=>handleClick(value)}>
				{value}
			</button>
		);
	}
}

export default Button;
