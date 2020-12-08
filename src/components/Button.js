import React, { Component } from "react";
// import "./Button.css";

class Button extends Component {
	isOperator = (val) => {
		return !isNaN(val) || val === "." || val === "=";
	};

	render() {
		return (
			<button
				className={`btn ${
					this.isOperator(this.props.children) ? "" : "operatorBtn"
				}`}
				onClick={() => this.props.handleClick(this.props.children)}
			>
				{this.props.children}
			</button>
		);
	}
}

export default Button;
