var categorys = [
	{name: "Fruits", id: 1},
	{name: "Vegetable", id: 2},
]

var Product = [
	{name: "Carot", price: 10, category: 2, stock: 15, id: 1},
	{name: "Radish", price: 6, category: 2, stock: 36, id: 2},
	{name: "Spinach", price: 8, category: 2, stock: 6, id: 3},
	{name: "Potatoes", price: 60, category: 2, stock: 53, id: 4},
	{name: "Strawberry", price: 32, category: 1, stock: 0, id: 5},
	{name: "Apple", price: 999, category: 1, stock: 321, id: 6},
	{name: "Banana", price: 32, category: 1, stock: 32, id: 7},
	{name: "Pear", price: 8, category: 1, stock: 64, id: 8},
]

var products = [];

Product.map((product) => {
	product.category = categorys.find(category => category.id == product.category)
	products.push(product);
});

export {products, categorys} 