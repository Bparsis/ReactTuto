import Protected from "./../Components/exo5/Protected";
import NeedAuth from "./../Components/exo5/NeedAuth";

const Exo5 = ({logged}) => {
	return (
		<>
			<NeedAuth logged={logged}>
				<Protected/>
			</NeedAuth>
		</>
	);
}

export default Exo5;