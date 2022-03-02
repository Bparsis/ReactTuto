import {useState, useEffect} from "react";

import ShearchBar from "./ShearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = () => {
	
	const [inputValue, setInputValue] = useState("");
	const [checkboxValue, setCheckboxValue] = useState(false);
	
	useEffect(() => {
		console.log(inputValue, checkboxValue)
	}, [inputValue, checkboxValue]);
	
	
	return (
		<>
			<ShearchBar setInputValue={setInputValue} setCheckboxValue={setCheckboxValue} />
			<ProductTable inputValue={inputValue} checkboxValue={checkboxValue} />
		</>
	);
}

export default FilterableProductTable;