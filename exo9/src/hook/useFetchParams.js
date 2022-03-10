import {useState, useEffect} from "react";

export default function useFetchParams(url, params){
	
	const [loadingParams, setLoading] = useState(null);
	const [errorParams, setError] = useState(null);
	const [dataParams, setData] = useState([]);
	
	useEffect(() => {console.log("loadingParams :",loadingParams)},[loadingParams]);
	useEffect(() => {console.log("dataParams :",dataParams)},[dataParams]);
	useEffect(() => {console.log("errorParams :",errorParams)},[errorParams]);
	useEffect(() => {console.log("-----------------")},[loadingParams, dataParams, errorParams]);
	
	const refreshParams = (url, params) => {
		setLoading(true);
		fetch(url, params)
			.then((res) => res.json())
			.then((res) => setData(res))
			.catch((error) => {console.log(error);setError(error)})
			.finally((loading) => {setLoading(false)})
	}
	
	useEffect(()=>{
		refreshParams(url, params)
	},[url, params])
	
	return {loadingParams, dataParams, errorParams, refreshParams};
}