import UseChangeColor from './UseChangeColor';
import useFetch from './useFetch';

export default function TestHookPerso(){
	
	const {color, ChangeColor} = UseChangeColor("");
	
	const {loading, data, error, refresh} = useFetch("https://v2.jokeapi.dev/joke/Any");
	let content = <h1>Init</h1>

	if (loading) return <h2>Loading</h2>
	if (error) return <h2>{error}</h2>
	
	if(data?.type === "twopart") {
		content = (
			<>
				<h1>{data?.setup}</h1>
				<h3>{data?.delivery}</h3>
			</>
		);
	} else {
		content = <h2>{data?.joke}</h2>
	}
	let flag = []
	if (data.flags){
		flag = Object.entries(data.flags);
	}
	let tags = false;
	flag.map((val) => {
		if(val[1]){tags = true}
	})
	
	
	return (
		<div
			style={{width: "100vw", height: "100vw", backgroundColor: "#" + color }}
		>
			<button onClick={ChangeColor}>Set Bg Color </button><br /><br />
			<button onClick={refresh}> useFetch </button>
			{content}
			{tags &&<h5>Tags</h5>}
			<ul style={{listStyle: "none"}}>
			{flag.map( (val,i) => {
				if(val[1]){
					return <li key={i}>{val[0]}</li>
				}
			})}
			</ul>
		</div>
	);
}