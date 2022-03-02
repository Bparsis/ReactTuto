export default function Converter({device, setDevice}){	
	const handleEuro = (euro) => {
		let franc = euro*6.55957;
		let newDevice = {euro: euro, franc: franc}
		setDevice(newDevice);
	};
	return (
		<form className="my-5 text-center">
			<label> Euros :
			<input className="mb-3 form-control" type="number" placeholder="Euros" value={device.euro} onInput={(e) => handleEuro(e.target.value)}/>
			</label>
		</form>
	);
}