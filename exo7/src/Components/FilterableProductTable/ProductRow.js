import {useContext} from "react";

import ProductCategoryRow from "./ProductCategoryRow";

import {CartContext} from "./../Router";

const ProductRow = ({product}) => {
	
	const {cart, setCart} = useContext(CartContext);
	
	const handleAdd = () => {
		let newCart = [...cart];
		newCart.push(product);
		console.log(newCart);
		setCart(newCart);
	}
	let divStyle = "container p-1 my-4 text-center rounded-pill bg-info text-white border border-5";
	divStyle += product.stock <= 0 ? " border-warning" : " border-primary" ;
	
	return (
		<div className={divStyle} style={{width: 400}}>	
			<ProductCategoryRow category={product.category}/>
			<h4>{product.name}</h4>
			<p>price {product.price}, stock {product.stock}</p>
			<button className="border-0 rounded-pill bg-primary text-white" onClick={handleAdd}>ajouter au panier</button>
		</div>
	);
}

export default ProductRow;