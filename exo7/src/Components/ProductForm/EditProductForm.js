import { useNavigate } from "react-router-dom";
import {useContext} from "react";

import {AppContext} from "./../../App";

const EditProductForm = ({id}) => {
	
	const {categorys, products, setProducts} = useContext(AppContext);
	
	const navigate = useNavigate();
    
    var SelProduct = products.find(product => product.id == id);
    var editedProduct = {};
    
    const handleCategory = (NewCategory) => {
		NewCategory = categorys.find(category => category.id == NewCategory);
		editedProduct.category = NewCategory;
    }
    
    const handleName = (NewName) => {
		editedProduct.name = NewName;
    }
    
    const handlePrice = (NewPrice) => {
		NewPrice = parseInt(NewPrice);
		editedProduct.price = NewPrice;
    }
    
    const handleStock = (NewStock) => {
		NewStock = parseInt(NewStock);
		editedProduct.stock = NewStock;
    }
    
    const handleSubmit = (e) => {
	    e.preventDefault();
	    
	    if(!editedProduct.category){
			let selCateg = e.target[0].value;
			editedProduct.category = categorys.find(category => category.id == selCateg);
	    }
	    
	    let NewProduct = {...SelProduct, ...editedProduct};
		
		let NewProducts = [...products];
		
	    NewProducts.map((product, i) => {
		    if(product == SelProduct){
			    NewProducts.splice(i, 1, NewProduct);
		    }
	    })
		setProducts(NewProducts);
		
	    navigate("/FilterableProductTablePage");
    }
    
    return (
        <>
		<form onSubmit={handleSubmit} className="flex">
			<select className ="col-2  rounded" id="select" onInput={(e) => handleCategory(e.target.value)}>
				<option value={SelProduct.category.id} key={0}>{SelProduct.category.name}</option>
				{categorys.filter(category => category.id != SelProduct.category.id).map((category, i) =>{
					return <option value={category.id} key={i+1}> {category.name} </option>
				})}
			</select>
			<input className ="col-2  rounded" type="text" placeholder={SelProduct.name} onChange={(e) => handleName(e.target.value)} />
			<input className ="col-2  rounded" type="number" placeholder={SelProduct.price} onChange={(e) => handlePrice(e.target.value)} />
			<input className ="col-2  rounded" type="number" placeholder={SelProduct.stock} onChange={(e) => handleStock(e.target.value)} />
			<br />
			<button className=" btn-primary" type={"submit"} className="btn btn-primary">c'est partit</button>
		</form>
        </>
    )
};


export default EditProductForm;