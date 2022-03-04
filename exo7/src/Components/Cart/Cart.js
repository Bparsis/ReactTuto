import {useContext} from "react";
import {AppContext} from "./../../App";

import CartItem from "./CartItem";

const Cart = () => {
	const {cart, setCart} = useContext(AppContext);

	return (
		<div className="flex">
			{cart.map((cartItem, i) => {
				return <CartItem key={i} cartItem={cartItem} setCart={setCart} cart={cart}/>
			})}
		</div>
	);
}

export default Cart;