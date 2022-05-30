import React, { Component } from "react";
import "./Buttons.css";

const list = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];

export class Buttons extends Component {
	render() {
		const display = list.map((el) =>
			el === 0 ? (
				<div className="button btn" key={el}>
					{el}
				</div>
			) : (
				<div className="button" key={el}>
					{el}
				</div>
			)
		);

		return <div className="buttons">{display}</div>;
	}
}

export default Buttons;
