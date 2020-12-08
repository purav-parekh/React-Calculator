import React, { Component } from "react";
import "./Display.css";

class Display extends Component {
	render() {
		return (
			<div className="display">
				<div>0{this.props.children}</div>
			</div>
		);
	}
}

export default Display;
