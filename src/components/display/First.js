import React, { Component } from "react";
import Button from "../Button";
import Operator from "../Operator";
import "./First.css";

const list = ["AC", "+/-"];
export class First extends Component {
	render() {
		return (
			<div className="first">
				{list.map((el) => (
					<Button value={el} key={el} />
				))}
				<Operator value="%" />
			</div>
		);
	}
}

export default First;
