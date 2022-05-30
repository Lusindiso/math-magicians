import React, { Component } from "react";
import "./Operator.css";

export class Operator extends Component {
	render() {
		return <div className="operator">{this.props.value}</div>;
	}
}

export default Operator;
