import {useContext} from "react";
import {CartContext} from "./../Router";

import CartItem from "./CartItem";

const Cart = () => {
	const {cart, setCart} = useContext(CartContext);

	return (
		<div className="flex">
			{cart.map((cartItem, i) => {
				return <CartItem key={i} cartItem={cartItem} setCart={setCart} cart={cart}/>
			})}
		</div>
	);
}

export default Cart;