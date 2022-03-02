import {useState, useEffect}from "react";
import EurosConv from "./EurosConv";
import FrancConv from "./FrancConv";

export default function Converter(){
	const[device, setDevice] = useState({euro: 0, franc: 0});
	
	useEffect(() => {
		console.log(device)
	}, [device]);
	
	return (
		<div className="converter text-center">
			<h1>Convertisseur</h1>
			<EurosConv device={device} setDevice={setDevice}/>
			<FrancConv device={device} setDevice={setDevice}/>
		</div>
	);
}