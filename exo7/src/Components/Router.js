import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
import Layout from "./../page/Layout";
import Home from "./../page/Home";
import Not from "./../page/Not";

import FilterableProductTablePage from "./../page/FilterableProductTablePage";
import CartPage from "./../page/CartPage";
import EditProductFormPage from "./../page/EditProductFormPage";
import AddProductFormPage from "./../page/AddProductFormPage";
import LoginPage from "./../page/LoginPage";
import LogoutPage from "./../page/LogoutPage";

const Router = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="FilterableProductTablePage" element={<FilterableProductTablePage />} />
					<Route path="CartPage" element={<CartPage />} />
					<Route path="EditProductFormPage:id" element={<EditProductFormPage />} />
					<Route path="AddProductFormPage" element={<AddProductFormPage />} />
					<Route path="LoginPage" element={<LoginPage />} />
					<Route path="LogoutPage" element={<LogoutPage />} />
					<Route path="*" element={<Not />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;