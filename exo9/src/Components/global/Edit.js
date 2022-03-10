import { useNavigate } from "react-router-dom";

import useFetch from "./../../hook/useFetch";
import useFetchParams from "./../../hook/useFetchParams";

const Form = ({categories, id}) => {
	const navigate = useNavigate();
	
	var Url = 'https://fakestoreapi.com/products/'+id;
	
	// const {errorParams, dataParams, loadingParams, refreshParams} = useFetchParams(Url);
	const {error, data, loading, refresh} = useFetch(Url);
	var selProduct = data;
	
	var editedProduct = {};
	
	const handleTitle = (NewTitle) => {
		editedProduct.title = NewTitle;
    }
	
	const handleDesc = (NewDesc) => {
		editedProduct.description = NewDesc;
    }
	
	const handleCateg = (NewCateg) => {
		editedProduct.category = NewCateg;
    }
	
	const handleImage = (NewImage) => {
		editedProduct.image = NewImage;
    }
    
    const handlePrice = (NewPrice) => {
		NewPrice = parseInt(NewPrice);
		editedProduct.price = NewPrice;
    }
	
	const edit = (e) => {
		e.preventDefault();
		console.log("|||||||||||||||||||||||||||||||||||||||||||||||");
		
		if(!editedProduct.category){
			let selCateg = e.target[3].value;
			editedProduct.category = selCateg;
	    }
		
		let NewProduct = {...selProduct, ...editedProduct};
		
		var Params = {
			method: "PUT",
			body:JSON.stringify(
                {
                    title: NewProduct.title,
                    price: NewProduct.price,
                    description: NewProduct.description,
                    image: NewProduct.image,
                    category: NewProduct.category
                }
            )
		}
		refresh(Url);
		navigate("/FilterableProductPage")
	}
	
	if (loading){return <h1>Loading <span className="spinner-border text-secondary border-5" ></span></h1>;}
	
	return (
		<form onSubmit={edit}>
			<input type="text" onChange={(e) => handleTitle(e.target.value)} className="form-control mx-5 my-2" placeholder={selProduct?.title} style={{width: "90%"}} />
			<textarea onChange={(e) => handleDesc(e.target.value)} className="form-control mx-5 my-2" placeholder={selProduct?.description} style={{width: "90%"}} />
			<input type="number" onChange={(e) => handlePrice(e.target.value)} className="form-control mx-5 my-2" placeholder={selProduct?.price} style={{width: "90%"}} />
			<select onChange={(e) => handleCateg(e.target.value)} className="mx-5">
				<option value={selProduct.category} key={0}>{selProduct.category}</option>
				{categories.filter(category => category != selProduct.category).map((category, i) => {
					return <option key={i} value={category}>{category}</option>
				})}
			</select>
			<input type="text" onChange={(e) => handleImage(e.target.value)} className="form-control mx-5 my-2" placeholder={selProduct?.image} style={{width: "90%"}} />
			<button className="btn btn-outline-success mx-5 my-2" type="submit">Edit</button>
		</form>
	);
}

export default Form;