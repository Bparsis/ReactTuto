import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
import Layout from "./../page/Layout";
import Home from "./../page/Home";
import Not from "./../page/Not";

import FilterableProductTablePage from "./../page/FilterableProductTablePage";
import CartPage from "./../page/CartPage";

import {useState, createContext} from "react";

const CartContext = createContext();

const Router = () => {

	const[cart, setCart] = useState([]);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
						<Route path="FilterableProductTablePage" element={<FilterableProductTablePage cart={cart} setCart={setCart} />} />
						<Route path="CartPage" element={<CartPage cart={cart} setCart={setCart} />} />
					<Route path="*" element={<Not />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;