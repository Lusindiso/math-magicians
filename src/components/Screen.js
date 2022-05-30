import React, { Component } from "react";
import "./Screen.css";

export class Screen extends Component {
	render() {
		return <input className="screen" value="0" readOnly />;
	}
}

export default Screen;
