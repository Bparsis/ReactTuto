import {products, categorys} from "./../global/Data";

const AddProductForm = () => {

  var NewProduct = {};
  
  const maxId = () => {
	  let max = products[0].id;
	  products.map((product) => {
		  if(product.id > max){
			  max = product.id;
		  }
	  })
	  return max+1
  }
  
  const handleCategory = (NewCategory) => {
	NewCategory = categorys.find(category => category.id == NewCategory);
	NewProduct.category = NewCategory;
  }
  
  const handleName = (NewName) => {
	NewProduct.name = NewName;
  }
  
  const handlePrice = (NewPrice) => {
	NewPrice = parseInt(NewPrice);
	NewProduct.price = NewPrice;
  }
  
  const handleStock = (NewStock) => {
	NewStock = parseInt(NewStock);
	NewProduct.stock = NewStock;
  }
  
  const handleSubmit = (e) => {
	  e.preventDefault();
	  let NewId = products.length+1;
	  if (products.find(product => product.id == NewId)){
		  NewId = maxId();
	  }
	  
	  if(!NewProduct.category){
		let selCateg = e.target[0].value;
		NewProduct.category = categorys.find(category => category.id == selCateg);
	  }
	  
	  NewProduct.id = NewId;
	  console.log(NewProduct);
	  products.push(NewProduct);
	  
  }
  
  return (
    <>
		<form onSubmit={handleSubmit}>
			<select id="select" onInput={(e) => handleCategory(e.target.value)}>
				{categorys.map((category, i) =>{
					return <option value={category.id} key={i}>{category.name}</option>
				})}
			</select>
			<input type="text" placeholder="Name" required onChange={(e) => handleName(e.target.value)} />
			<input type="number" placeholder="Price" required onChange={(e) => handlePrice(e.target.value)} />
			<input type="number" placeholder="Stock" required onChange={(e) => handleStock(e.target.value)} />
			<button type={"submit"} className="btn btn-primary">c'est partit</button>
		</form>
    </>
  )
};

export default AddProductForm;