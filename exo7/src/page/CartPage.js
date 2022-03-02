import Cart from "./../Components/Cart/Cart";

const CartPage = ({cart, setCart}) => {
  return (
    <>
      <Cart cart={cart} setCart={setCart} />
    </>
  )
};

export default CartPage;