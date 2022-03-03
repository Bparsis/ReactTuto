import {useContext} from "react";
import { useNavigate } from "react-router-dom";

import ProductCategoryRow from "./ProductCategoryRow";

import {CartContext} from "./../Router";

const ProductRow = ({product}) => {
	
	const navigate = useNavigate();
	const {cart, setCart} = useContext(CartContext);
	
	const handleAdd = () => {
		let newCart = [...cart];
		if (newCart.find(item => item.id == product.id) == undefined){
			newCart.push(product);
			setCart(newCart);
		}
	}
	
	const edit = () => {
		navigate("/EditProductFormPage"+product.id);
	}
	
	let divStyle = "container p-1 my-4 text-center rounded-pill text-white border border-5";
	divStyle += product.stock <= 0 ? " border-danger bg-warning" : " border-primary bg-info";
	
	return (
		<div className={divStyle} style={{width: 400}}>	
			<ProductCategoryRow category={product.category}/>
			<h4 onClick={edit}>{product.name}</h4>
			<p>price {product.price}, stock {product.stock}</p>
			{product.stock > 0 && <button className="border-0 rounded-pill bg-primary text-white" onClick={handleAdd}>ajouter au panier</button>}
		</div>
	);
}

export default ProductRow;