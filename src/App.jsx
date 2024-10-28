import "./App.css";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { footerLinks, navLinks } from "./data";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Navbar head="nahla" links={navLinks}/>
      <Outlet />
      <Footer year="2023" links={footerLinks}/>
      <ScrollToTop />
    </>
  );
}

export default App;
