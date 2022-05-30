import React, { Component } from "react";
import "./Button.css";

export class Button extends Component {
	render() {
		return <div className="button">{this.props.value}</div>;
	}
}

export default Button;
