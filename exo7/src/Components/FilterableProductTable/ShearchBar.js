const ShearchBar = ({setInputValue, setCheckboxValue}) => {

	const handleSchearch = (e) => {
		setInputValue(e);
	}
	
	const handleFilter = (e) => {
		setCheckboxValue(e);
	}

	return (
		<>
			<label>
				<input className="m-2 mb-3 form-control" type="text" placeholder="Reshearch ?" onChange={(e) => handleSchearch(e.target.value)} />
			</label>
			<label className="form-switch">
				<input className="m-3 form-check-input" type="checkbox" onChange={(e) => handleFilter(e.target.checked)} />
				Filter by stock
			</label>
		</>
	);
}

export default ShearchBar;