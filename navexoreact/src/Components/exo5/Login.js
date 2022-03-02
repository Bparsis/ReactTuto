import {useNavigate, useLocation} from "react-router-dom";

export default function Login({setLogged, setUser}){	
	const navigate = useNavigate();
	let location = useLocation();
	let from = location.state?.from?.pathname || "/";
	
	const handleSubmit = (e) => {
		e.preventDefault();
		setLogged(true);
		setUser(e.target[0].value);
		navigate(from, {replace: true});
	};
	
	// useEffect(() => {
		// setLogged(true);
	// });
	
	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="login?"/>
		</form>
	);
}