import {useEffect, useState} from "react";

export default function TestReducer({setLogged, setUser}){	
	
function makeRdmStr(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}
	
	const [username, setUsername] = useState("");
	
	useEffect(() => {
		console.log(username)
	},[username]);
	
	return (
		<div>
			<span>{username}</span>
			<button onClick = {() => {setUsername(makeRdmStr(15))}}>Click</button>
		</div>
	);
}