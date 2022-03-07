import { useNavigate } from "react-router-dom";
import {useContext} from "react";

import {AppContext} from "./../../App";

const EditProductForm = ({id}) => {
	
	const {products, setProducts} = useContext(AppContext);
	
	const navigate = useNavigate();
    
    var SelProduct = products.find(product => product.id == id);
    
    const handleRemove = (e) => {
	    e.preventDefault();
		
		let NewProducts = [...products];
		
	    NewProducts.map((product, i) => {
		    if(product == SelProduct){
			    NewProducts.splice(i, 1);
		    }
	    })
		setProducts(NewProducts);
		
	    navigate("/FilterableProductTablePage");
    }
	
	const handleChicken = (e) => {
	    e.preventDefault();
	    navigate("/FilterableProductTablePage");
    }
    
    return (
        <div className="text-center my-5 border border-3 border-warning container py-3 bg-light rounded-pill" style={{width: 500}}>
			<h1>Are you sure ?</h1>
			<div className="btn-group">
				<button className="btn btn-outline-danger" onClick={handleChicken}>No</button>
				<button className="btn btn-outline-success" onClick={handleRemove}>Yes</button>
			</div>
        </div>
    )
};


export default EditProductForm;