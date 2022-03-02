import FilterableProductTable from "./../Components/FilterableProductTable/FilterableProductTable";

const FilterableProductTablePage = ({cart, setCart}) => {
  return (
    <>
      <FilterableProductTable cart={cart} setCart={setCart} />
    </>
  )
};

export default FilterableProductTablePage;