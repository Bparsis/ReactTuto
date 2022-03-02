import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./../page/Layout";
import Home from "./../page/Home";
import Not from "./../page/Not";
import Exo3 from "./../page/Exo3";
import Exo4 from "./../page/Exo4";
import Exo5 from "./../page/Exo5";
import Exo6 from "./../page/Exo6";

import LogOut from "./exo5/LogOut";
import Login from "./exo5/Login";


const Router = () => {
const [logged, setLogged] = useState(false);
const [user, setUser] = useState();

	useEffect(() => {
		console.log(logged)
	}, [logged]);
	

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="Exo3" element={<Exo3 />} />
					<Route path="Exo6" element={<Exo6 />} />
					<Route path="Wild/" element={<Layout />} >
						<Route path=":Exo4" element={<Exo4 />} />
					</Route>
					
					<Route path="protected" element={
						<Exo5  logged={logged}/>
					}/>
					
					<Route path="login" element={<Login setLogged={setLogged} setUser={setUser} /> } />
					<Route path="logOut" element={<LogOut user={user} setUser={setUser} logged={logged} setLogged={setLogged} /> } />
					<Route path=	"*" element={<Not />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;