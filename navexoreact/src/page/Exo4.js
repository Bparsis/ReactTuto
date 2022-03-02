import { useParams } from "react-router-dom";
import Form from "./../Components/exo4/Form";

const Exo4 = () => {
	const {Exo4} = useParams();
	return (
		<>
			<h1>{Exo4}</h1>
			<Form />
		</>
	);
}

export default Exo4;