import { Component } from "react";
import "./App.css";
// import Display from "./components/Display";
// import button from "./components/button";
// import Keypad from "./components/Keypad";

const CalculatorOperations = {
	"/": (prevValue, nextValue) => prevValue / nextValue,
	"*": (prevValue, nextValue) => prevValue * nextValue,
	"+": (prevValue, nextValue) => prevValue + nextValue,
	"-": (prevValue, nextValue) => prevValue - nextValue,
	"=": (prevValue, nextValue) => nextValue,
};

class App extends Component {
	state = {
		displayValue: "0",
		waitingForOperand: false,
		operator: null,
		prevNum: null,
		// currNum: "",
		// operator: "",
	};

	inputDigit(digit) {
		const { displayValue, waitingForOperand } = this.state;

		if (waitingForOperand) {
			this.setState({
				displayValue: String(digit),
				waitingForOperand: false,
			});
		} else {
			this.setState({
				displayValue: displayValue === "0" ? String(digit) : displayValue + digit,
			});
		}
	}

	inputDot() {
		const { displayValue, waitingForOperand } = this.state;
		if (waitingForOperand) {
			this.setState({
				displayValue: "0.",
				waitingForOperand: false,
			});
		} else if (displayValue.indexOf(".") === -1) {
			this.setState({
				displayValue: displayValue + ".",
				waitingForOperand: false,
			});
		}
	}

	clear() {
		//const { displayValue } = this.state;
		this.setState({
			displayValue: "0",
			waitingForOperand: false,
			operator: null,
			prevNum: null,
		});
	}

	performOperation(nextOperator) {
		const { displayValue, prevNum, operator } = this.state;
		//prevNum= parseFloat(displayValue)
		if (prevNum === null) {
			this.setState({
				prevNum: parseFloat(displayValue),
			});
		} else if (operator) {
			const total = CalculatorOperations[operator](prevNum, parseFloat(displayValue));

			this.setState({
				displayValue: String(total),
				prevNum: total,
				//displayValue: "0",
			});
		}

		this.setState({
			waitingForOperand: true,
			operator: nextOperator,
		});
	}

	// calculate() {
	// 	let total = 0;
	// 	const { prevNum, operator, displayValue } = this.state;
	// 	if (operator === "+") {
	// 		total = parseFloat(prevNum) + parseFloat(displayValue);
	// 	} else if (operator === "-") {
	// 		total = parseFloat(prevNum) - parseFloat(displayValue);
	// 	} else if (operator === "*") {
	// 		total = parseFloat(prevNum) * parseFloat(displayValue);
	// 	} else if (operator === "/") {
	// 		total = parseFloat(prevNum) / parseFloat(displayValue);
	// 	}
	// 	this.setState({
	// 		displayValue: total,
	// 		//waitingForOperand: false,
	// 		//operator: null,
	// 		//prevNum: "",
	// 	});
	// }

	// add() {
	// 	const {displayValue} = this.state;
	// 	currValue= parseFloat(displayValue)
	// 	this.setState ({
	// 		displayValue: parseInt(displayValue) + parseInt(digit)
	// 	})
	// }

	render() {
		const { displayValue } = this.state;
		return (
			<div className="App">
				<h1>Calculator</h1>
				<div className="calci" style={calciStyle}>
					<div className="display">{displayValue}</div>
					<div className="keypad">
						<button className="calci-key" onClick={() => this.inputDigit(7)}>
							7
						</button>
						<button className="calci-key" onClick={() => this.inputDigit(8)}>
							8
						</button>
						<button className="calci-key" onClick={() => this.inputDigit(9)}>
							9
						</button>
						<button
							className="calci-key operator"
							onClick={() => this.performOperation("+")}>
							+
						</button>
						<button className="calci-key" onClick={() => this.inputDigit(4)}>
							4
						</button>
						<button className="calci-key" onClick={() => this.inputDigit(5)}>
							5
						</button>
						<button className="calci-key" onClick={() => this.inputDigit(6)}>
							6
						</button>
						<button
							className="calci-key operator"
							onClick={() => this.performOperation("-")}>
							-
						</button>
						<button className="calci-key" onClick={() => this.inputDigit(1)}>
							1
						</button>
						<button className="calci-key" onClick={() => this.inputDigit(2)}>
							2
						</button>
						<button className="calci-key" onClick={() => this.inputDigit(3)}>
							3
						</button>
						<button
							className="calci-key operator"
							onClick={() => this.performOperation("*")}>
							*
						</button>
						<button className="calci-key dot" onClick={() => this.inputDot()}>
							.
						</button>
						<button className="calci-key" onClick={() => this.inputDigit(0)}>
							0
						</button>
						<button
							className="calci-key equals"
							onClick={() => this.performOperation("=")}>
							=
						</button>
						<button
							className="calci-key operator"
							onClick={() => this.performOperation("/")}>
							/
						</button>
					</div>
					<button className="calci-key clear" onClick={() => this.clear()}>
						CLEAR
					</button>
				</div>
				{/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
			</div>
		);
	}
}

export default App;

const calciStyle = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	alignSelf: "center",
	maxWidth: "15em",
	outline: "1px solid black",
	// padding: "1em",
};
