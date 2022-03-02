const ShearchBar = ({setInputValue, setCheckboxValue, setCategoryCheckValue, categoryCheckValue}) => {

	const handleSchearch = (e) => {
		setInputValue(e);
	}
	
	const handleFilter = (e) => {
		setCheckboxValue(e);
	}
	
	const handleVegetable = (e) => {
		let newCategoryCheckValue = {...categoryCheckValue, vegetable: e};
		setCategoryCheckValue(newCategoryCheckValue);
	}
	
	const handleFruits = (e) => {
		let newCategoryCheckValue = {...categoryCheckValue, fruits: e};
		setCategoryCheckValue(newCategoryCheckValue);
	}

	return (
		<div className="d-flex">
			<label>
				<input className="m-2 mb-3 form-control" type="text" placeholder="Reshearch ?" onChange={(e) => handleSchearch(e.target.value)} />
			</label>
			<label className="form-switch">
				<input className="m-3 form-check-input" type="checkbox" onChange={(e) => handleFilter(e.target.checked)} />
				Filter by stock
			</label>
			<label className="form-control mx-5" style={{width: 200}}>
				<input className="m-3 form-check-input" type="checkbox" onChange={(e) => handleVegetable(e.target.checked)} />
				Vegetable
			</label>
			<label className="form-control mx-5" style={{width: 200}}>
				<input className="m-3 form-check-input" type="checkbox" onChange={(e) => handleFruits(e.target.checked)} />
				Fruits
			</label>
		</div>
	);
}

export default ShearchBar;