import {useContext} from "react";

import {AppContext} from "./../../App";

import ProductRow from "./ProductRow";

const ProductTable = ({inputValue, checkboxValue, categoryCheckValue}) => {
	
	const {products} = useContext(AppContext);
	
	let newproducts = products.filter(product => product.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1);
	
	if (checkboxValue){
		newproducts = newproducts.filter(product => product.stock > 0);
	}
	
	if (categoryCheckValue.vegetable){
		newproducts = newproducts.filter(product => product.category.name == "Vegetable");
	}
	
	if (categoryCheckValue.fruits){
		newproducts = newproducts.filter(product => product.category.name == "Fruits");
	}
	
	return (
		<div className="flex">
			{newproducts.map((product, i)=>{			
				return <ProductRow key={i} product={product} />
			})}
		</div>
	);
}

export default ProductTable;