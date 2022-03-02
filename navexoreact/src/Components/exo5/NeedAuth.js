import {useLocation, Navigate} from "react-router-dom";


export default function NeedAuth({logged, children}){
// export default function NeedAuth(props){
	let location = useLocation();
	console.log(logged);
	if(logged){
		return children
	} else {
		return <Navigate to="/Login" state={{from: location}} />
	}
	
}