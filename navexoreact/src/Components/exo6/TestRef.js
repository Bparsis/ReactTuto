import {useEffect, useState, useRef} from "react";

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
	
	const [showinput, setShowinput] = useState(false);
	const inputRef = useRef(null);

	useEffect(() => {
		if(showinput){
			inputRef.current.focus();
		}
	},[showinput]);
	
	return (
		<div>
			<h1>change name!</h1>
			{showinput && (
				<input type="text" placeholder="UserName" ref={inputRef} />
			)}
			<button
				onClick={() => {
					setShowinput(true);
				}} >
			Change Name</button>
		</div>
	);
}