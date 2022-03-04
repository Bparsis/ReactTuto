import logo from './logo.svg';
import './App.css';
import Router from './Components/Router';
import {useState, createContext, useEffect} from "react";
import {productsInit, categorysInit} from "./Components/global/Data"

const AppContext = createContext();

function App() {
	
	const [cart, setCart] = useState([]);
	const [logged, setLogged] = useState(false);
	const [user, setUser] = useState({});
	const [products, setProducts] = useState(productsInit);
	const [categorys, setCategorys] = useState(categorysInit);
	
	useEffect(() => {console.log("cart :",cart)},[cart]);
	useEffect(() => {console.log("logged :",logged)},[logged]);
	useEffect(() => {console.log("user :",user)},[user]);
	useEffect(() => {console.log("products :",products)},[products]);
	useEffect(() => {console.log("categorys :",categorys)},[categorys]);
	useEffect(() => {console.log("------------------")},[cart, logged, user, products, categorys]);
	
	return (
		<AppContext.Provider value={{logged, setLogged, user, setUser, cart, setCart, products, setProducts, categorys, setCategorys}}>
			<Router />
		</AppContext.Provider>
	);
}

export  {App, AppContext};
