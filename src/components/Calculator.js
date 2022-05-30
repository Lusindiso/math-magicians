import React, { Component } from "react";
import Buttons from "./display/Buttons";
import "./Calculator.css";
import First from "./display/First";
import Last from "./display/Last";
import Screen from "./Screen";

export class Calculator extends Component {
	render() {
		return (
			<div className="calculator">
				<Screen />
				<div className="bottom">
					<First />
					<Last />
					<Buttons />
				</div>
			</div>
		);
	}
}

export default Calculator;
