import { Outlet, Link, useNavigate } from "react-router-dom";
import Header from "./../Components/global/Header";
import Footer from "./../Components/global/Footer";

const Layout = () => {
  	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		let target = e.target.firstChild.value;
		navigate(target);
	}
  
  return (
    <>
		<Header />
		<Outlet />
		<Footer />
    </>
  )
};

export default Layout;

 // <nav className="navbar">
        // <ul>
          // <li>
            // <Link to="/">Home</Link>
          // </li>
          // <li>
            // <Link to="Exo3">Exo3</Link>
          // </li>
          // <li>
            // <Link to="Exo4">Exo4</Link>
          // </li>
        // </ul>
      // </nav>