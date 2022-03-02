import ProductCategoryRow from "./ProductCategoryRow";

const ProductRow = ({product}) => {

	return (
		<div className="container p-1 my-4 bg-info text-white text-center rounded-pill" style={{width: 400}}>	
			<ProductCategoryRow category={product.category}/>
			<h4>{product.name}</h4>
			<p>price {product.price}, stock {product.stock}</p>
		</div>
	);
}

export default ProductRow;