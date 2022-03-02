import {useNavigate, useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function Navigate({to}){	
	const navigate = useNavigate();

	useEffect(() => {
		navigate(to, {replace: true});
	});
	
	return <p>test</p>;
}