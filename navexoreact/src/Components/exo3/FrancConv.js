export default function Converter({device, setDevice}){	
	const handleFranc = (franc) => {
		let euro = franc/6.55957;
		let newDevice = {euro: euro, franc: franc}
		setDevice(newDevice);
	};
	return (
		<form className="my-5 text-center">
			<label>Francs :
			<input className="mb-3 form-control" type="number" placeholder="Francs" value={device.franc} onInput={(e) => handleFranc(e.target.value)}/>
			</label>
		</form>
	);
}