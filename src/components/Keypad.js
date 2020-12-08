// import Button from "./Button";

function Keypad() {
	return (
		<div className="keypad" style={keypadStyle}>
			<Button handleClick={addToDisplay}>7</Button>
			<Button>8</Button>
			<Button>9</Button>
			<Button>+</Button>
			<Button>4</Button>
			<Button>5</Button>
			<Button>6</Button>
			<Button>-</Button>
			<Button>1</Button>
			<Button>2</Button>
			<Button>3</Button>
			<Button>*</Button>
			<Button>.</Button>
			<Button>0</Button>
			<Button>=</Button>
			<Button>/</Button>
			<Button>Clear</Button>
		</div>
	);
}

export default Keypad;

const keypadStyle = {
	display: "grid",
	gridTemplateColumns: "1fr 1fr 1fr 1fr",
	gridGap: "1em",
	margin: "1em",
};
