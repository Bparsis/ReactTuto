import {useState, useEffect} from "react";

import ShearchBar from "./ShearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = ({cart, setCart}) => {
	
	const [inputValue, setInputValue] = useState("");
	const [checkboxValue, setCheckboxValue] = useState(false);
	const [categoryCheckValue, setCategoryCheckValue] = useState({vegetable: false, fruits: false});
	
	useEffect(() => {
		console.log(inputValue, checkboxValue, categoryCheckValue)
	}, [inputValue, checkboxValue, categoryCheckValue]);
	
	return (
		<>
			<ShearchBar setInputValue={setInputValue} setCheckboxValue={setCheckboxValue} setCategoryCheckValue={setCategoryCheckValue} categoryCheckValue={categoryCheckValue} />
			<ProductTable inputValue={inputValue} checkboxValue={checkboxValue} categoryCheckValue={categoryCheckValue} cart={cart} setCart={setCart}/>
		</>
	);
}

export default FilterableProductTable;