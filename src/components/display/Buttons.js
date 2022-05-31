import React, { Component } from "react";
import Button from "../Button";

import "./Buttons.css";

const list = ["AC", "+/-", "%", '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', "."];

class Buttons extends Component {
	render() {
		const { handleClick } = this.props;

		return (
			<div className="buttons">
				{list.map((el) => (
					<Button value={el} key={el} handleClick={handleClick}/>
				))}
			</div>
		);
	}
}

export default Buttons;
