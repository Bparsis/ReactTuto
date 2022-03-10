import useFetch from "./../../hook/useFetch";

import ProductRow from "./ProductRow";

const FilterableProduct = () => {
	
	const {data, error, loading, refresh} = useFetch("https://fakestoreapi.com/products")
	
	return (
		<div className="d-flex flex-wrap justify-content-around">
			{data.map((Product, i) => {
				return <ProductRow key={i} Product={Product} />
			})}
		</div>
	);
}

export default FilterableProduct;