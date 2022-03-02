import CartItem from "./CartItem";

const Cart = ({cart, setCart}) => {

	return (
		<div className="flex">
			{cart.map((cartItem, i) => {
				return <CartItem key={i} cartItem={cartItem} setCart={setCart} cart={cart} />
			})}
		</div>
	);
}

export default Cart;