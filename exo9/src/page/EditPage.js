import Edit from "./../Components/global/Edit";

import useFetch from "./../hook/useFetch";

import {useParams} from "react-router-dom";

const EditPage = () => {
	
	const {id} = useParams();
	
	const {error, data, loading, refresh} = useFetch('https://fakestoreapi.com/products/categories');
	
	return (
		<>
			<Edit categories={data} id={id}/>
		</>
	)
};
export default EditPage;