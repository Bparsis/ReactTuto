import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
import Layout from "./../page/Layout";
import Home from "./../page/Home";
import Not from "./../page/Not";
import LoginPage from "./../page/LoginPage";
import LogoutPage from "./../page/LogoutPage";

import NeedAdmin from "./global/NeedAdmin";

import FilterableProductPage from "./../page/FilterableProductPage";
import EditPage from "./../page/EditPage";

const Router = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="FilterableProductPage" element={<FilterableProductPage />} />
					<Route path="EditPage:id" element={<EditPage />} />
					<Route path="LoginPage" element={<LoginPage />} />
					<Route path="LogoutPage" element={<LogoutPage />} />
					<Route path="*" element={<Not />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;