import ProductRow from "./ProductRow";
import {products} from "./Data";

const ProductTable = ({inputValue, checkboxValue}) => {
	
	let newproducts = products.filter(product => product.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1);
	
	if (checkboxValue){
		newproducts = newproducts.filter(product => product.stock > 0);
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