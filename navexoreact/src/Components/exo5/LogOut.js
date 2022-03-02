import {useNavigate, useLocation} from "react-router-dom";

export default function Login({setLogged, setUser}){	
	const navigate = useNavigate();
	let location = useLocation();
	let from = location.state?.from?.pathname || "/";
	
	const handleSubmit = (e) => {
		e.preventDefault();
		setLogged(false);
		setUser();
		navigate("/");
	};
	
	
	return (
		<form onSubmit={handleSubmit}>
			<button className="btn btn-outline-warning" type="Submit">Logout?</button>
		</form>
	);
}