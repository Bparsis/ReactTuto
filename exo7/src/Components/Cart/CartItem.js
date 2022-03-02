const CartItem = ({cartItem, setCart, cart}) => {

	const handleRemove = () => {
		let newCart = [...cart];
		newCart.map((item, i) => {
			if (item.id == cartItem.id){
				newCart.splice(i, 1);
			}
		})
		setCart(newCart);
	}

	return (
		<div className="container p-1 my-4 bg-info text-white text-center rounded-pill" style={{width: 400}}>	
			<h5>{cartItem.category.name}</h5>
			<h4>{cartItem.name}</h4>
			<p>price {cartItem.price}, stock {cartItem.stock}</p>
			<button className="border-0 rounded-pill bg-primary text-white" onClick={handleRemove}>Remove</button>
		</div>
	);
}

export default CartItem;