import { useNavigate } from "react-router-dom";



const Form = () => {
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		let target = e.target.firstChild.value;
		navigate(target);
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<input type='text' className="form-control"/>
		</form>
	);
}

export default Form;