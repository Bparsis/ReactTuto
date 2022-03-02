import { Link } from "react-router-dom";
import Form from "./Form";

const Navbar = () => {

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-info">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">Navbar</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link" to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="Exo3">Exo3</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="Exo4">Exo4</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="protected">protected</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="Exo6">Exo6</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="Login">Login</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="LogOut">LogOut</Link>
						</li>
					</ul>
					<Form />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;