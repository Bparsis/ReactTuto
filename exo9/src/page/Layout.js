import { Outlet } from "react-router-dom";

import Header from "./../Components/global/Header";
import Footer from "./../Components/global/Footer";

const Layout = () => {
  
  return (
    <>
		<Header />
		<Outlet />
		<Footer />
    </>
  )
};

export default Layout;