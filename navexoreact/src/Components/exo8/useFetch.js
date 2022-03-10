import {useState, useEffect} from "react";

export default function useFetch(params){
	
	const [loading, setLoading] = useState(null);
	const [error, setError] = useState(null);
	const [data, setData] = useState("");
	
	// useEffect(() => {console.log("/-------|-------/")},[loading, data, error]);
	useEffect(() => {console.log("loading :",loading)},[loading]);
	useEffect(() => {console.log("data :",data)},[data]);
	useEffect(() => {console.log("error :",error)},[error]);
	useEffect(() => {console.log("/-------|-------/")},[loading, data, error]);
	
	const refresh = () => {
		setLoading(true);
		fetch(params)
			.then((res) => res.json())
			.then((res) => setData(res))
			.catch((error) => {console.log(error);setError(error)})
			.finally((loading) => {setLoading(false)})
	}
	
	useEffect(()=>{
		refresh()
	},[params])
	
	return {loading, data, error, refresh};
}