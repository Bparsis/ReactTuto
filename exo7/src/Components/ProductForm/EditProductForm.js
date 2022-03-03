import {products, categorys} from "./../global/Data";

import { useNavigate } from "react-router-dom";

const EditProductForm = ({id}) => {

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

	  products.map((product, i) => {
		  if(product == SelProduct){
			  products.splice(i, 1, NewProduct);
		  }
	  })
	  navigate("/FilterableProductTablePage");
	  console.log(products);
  }
  
  return (
    <>
		<form onSubmit={handleSubmit}>
			<select id="select" onInput={(e) => handleCategory(e.target.value)}>
				<option value={SelProduct.category.id} key={0}>{SelProduct.category.name}</option>
				{categorys.filter(category => category.id != SelProduct.category.id).map((category, i) =>{
					return <option value={category.id} key={i+1}>{category.name}</option>
				})}
			</select>
			<input type="text" placeholder={SelProduct.name} onChange={(e) => handleName(e.target.value)} />
			<input type="number" placeholder={SelProduct.price} onChange={(e) => handlePrice(e.target.value)} />
			<input type="number" placeholder={SelProduct.stock} onChange={(e) => handleStock(e.target.value)} />
			<button type={"submit"} className="btn btn-primary">c'est partit</button>
		</form>
    </>
  )
};

export default EditProductForm;