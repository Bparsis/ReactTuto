import react, { useState, useContext } from "react";

const UserContext = react.createContext();
	
function UserInfo() {
		const{username} = useContext(UserContext);
		return <span>user: {username}</span>
}

function Login() {
		const { setUsername } = useContext(UserContext);
		
		return (
			<input type="text" onChange={(e) => setUsername(e.currentTarget.value)} />
		);
}
	
const TestContext = () => {
	
	const [username, setUsername] = useState("");
	
	return (
		<UserContext.Provider value={{username, setUsername }}>
			<UserInfo />
			<Login />
		</UserContext.Provider>
	);
}

export default TestContext;