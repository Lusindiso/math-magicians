import React, { Component } from "react";
import Button from "../Button";
import Operator from "../Operator";
import "./Last.css";

const list = ["÷", "X", "-", "+"];
export class Last extends Component {
	render() {
		return (
			<div className="last">
				{list.map((el) => (
					<Operator value={el} key={el} />
				))}
				<Button value="=" />
			</div>
		);
	}
}

export default Last;
