import React, {useState} from "react";


function MyCompUpdater() {
	   
	const [count, setCount] = useState(0);

	function increase(){
		// setCount(count + 1);
		// setCount(count + 1); <- this wont increase the variable twice, it only +1
		// because the 'count' variable isnt update to the current state

		setCount(c => c + 1); // inside the parameter is 'updater function'
		setCount(c => c + 1); // 'c' represent the previous 'count'
	}

	function decrease(){
		setCount(c => c - 1);
	}

	function reset(){
		setCount(0);
	}

    return <div>
			<h2>Count: {count}</h2>
			<div style={{"display" : "flex"}}>
				<button onClick={increase}>(+) IncreaseTwice</button>
				<button onClick={decrease}>(-) Decrease</button>
				<button onClick={reset}>Reset</button>
			</div>
		</div>;
}

export default MyCompUpdater;
