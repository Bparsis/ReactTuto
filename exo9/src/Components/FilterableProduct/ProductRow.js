import { useNavigate } from "react-router-dom";

const ProductRow = ({Product}) => {
	
		const navigate = useNavigate();
		
		const edit = () => {
			navigate("/EditPage" + Product.id)
		}
		
		return (
		<div className="card m-5" style={{width: "400px"}} onClick={edit}>
			<img className="card-img-top mx-5 mt-3" style={{width: "300px", height: "auto"}} src={Product.image}/>
			<div className="card-body">
				<hr />
				<h2 className="card-title">{Product.title}</h2>
				<h4 className="card-text">{Product.category}</h4>
				<p className="card-text">{Product.description}</p>
				<p className="card-text">prix {Product.price}€ noted {Product.rating.rate} with {Product.rating.count} vote</p>
			</div>
		</div>
	);
}

export default ProductRow;