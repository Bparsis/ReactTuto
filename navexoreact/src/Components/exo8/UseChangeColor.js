import {useState, useEffect} from "react";

export default function UseChangeColor(){
	
	const [color, setColor] = useState("");
	
	const ChangeColor = () => {
		setColor(Math.random().toString(16).substr(-6));
	}
	
	useEffect(() => {
		// console.log("/-------|-------/")
		console.log("color ",color)
		console.log("/-------|-------/")
	}, [color]);
	
	return {color, ChangeColor};
}