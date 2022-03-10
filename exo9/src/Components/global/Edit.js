import { useNavigate } from "react-router-dom";

import useFetch from "./../../hook/useFetch";

const Form = ({categories, id}) => {
	const navigate = useNavigate();
	
	const {error, data, loading, refresh} = useFetch('https://fakestoreapi.com/products/'+id);
	let selProduct = data;
	
	const edit = (e) => {
		e.preventDefault();
		navigate("/FilterableProductPage")
	}
	
	return (
		<form onSubmit={edit}>
			<input type="text" className="form-control mx-5 my-2" placeholder={selProduct?.title} />
			<textarea className="form-control mx-5 my-2" placeholder={selProduct?.description} />
			<input type="number" className="form-control mx-5 my-2" placeholder={selProduct?.price} />
			<select className="mx-5">
				{categories.map((category, i) => {
					return <option key={i} value={category}>{category}</option>
				})}
			</select>
			<input type="text" className="form-control mx-5 my-2" placeholder={selProduct?.image} />
			<button className="btn btn-outline-success mx-5 my-2" type="submit">Search</button>
		</form>
	);
}

export default Form;