import {useReducer} from "react";

export default function TestReducer({setLogged, setUser}){	
	
	const reducer = (state, action) => {
		switch(action.type){
			case"set":
				return {count: action.value, showText: state.showText};
			case"ADD":
				return {count: state.count +1, showText: state.showText};
			case "toggleShowText":
				return {count: state.count , showText: !state.showText};
			default:
				return state;
		}
	}
	
	const [state, dispatch] = useReducer(reducer, {count: 0, showText: false})
	
	return (
		<div>
		{state.showText && <span>{state.count}</span>}
		<button
			onClick={()=>{
				dispatch({type: "toggleShowText"});
				dispatch({type: "ADD"});
			}}
		>Add</button>
		<button
			onClick={()=>{
				dispatch({type: "set", value: 0});
			}}
		>set</button>
		</div>
	);
}