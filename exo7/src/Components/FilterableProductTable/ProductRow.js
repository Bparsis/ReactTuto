import {useContext} from "react";
import { useNavigate } from "react-router-dom";

import ProductCategoryRow from "./ProductCategoryRow";

import {AppContext} from "./../../App";

const ProductRow = ({product}) => {
	
	const navigate = useNavigate();
	
	const {cart, setCart, user} = useContext(AppContext);
	
	const handleAdd = () => {
		let newCart = [...cart];
		if (newCart.find(item => item.id == product.id) == undefined){
			newCart.push(product);
			setCart(newCart);
		}
	}
	
	const handleRemove = () => {
		navigate("/RemoveProductFormPage"+product.id);
	}
	
	const edit = () => {
		navigate("/EditProductFormPage"+product.id);
	}
	
	let divStyle = "container p-1 my-4 text-center rounded-pill text-white border border-5 shadow-lg";
	divStyle += product.stock <= 0 ? " border-danger bg-warning" : " border-primary bg-info";
	
	return (
		<div className={divStyle} style={{width: 400}}>	
			<ProductCategoryRow category={product.category}/>
			{ user?.role =='admin' ? <h4 onClick={edit} >{product.name}</h4> : <h4>{product.name}</h4> }
			<p>price {product.price}, stock {product.stock}</p>
			<div className="btn-group rounded">
				{product.stock > 0 && <button className="btn btn-primary" onClick={handleAdd}>ajouter au panier</button>}
				{user?.role == 'admin' && <button className="btn btn-warning border border-2 border-danger text-white" onClick={handleRemove}>Supprimer</button>}
			</div>
		</div>
	);
}

export default ProductRow;
			/*<h4 { user?.role == 'admin' && onClick={edit} } >{product.name}</h4>*/