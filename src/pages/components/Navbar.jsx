import React from "react";
import { NavLink } from "react-router-dom";

// Assets
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

function Navbar() {
 React.useEffect(() => {
  window.addEventListener("scroll", () => {
   const navbar = document.querySelector(".navbar");
   if (window.scrollY > 100) {
    navbar.classList.add("shadow-md");
    navbar.classList.add("navbar-scrolled");
   } else {
    navbar.classList.remove("shadow-md");
    navbar.classList.remove("navbar-scrolled");
   }
  });
 }, []);
 return (
  <div className="__navbar">
   <nav className="navbar menu-inactive">
    <div className="container">
     <NavLink className="navbar-brand" to="/" itemScope>
      <img
       itemProp="image"
       src="/images/logo/logo.jpg"
       alt="Al Muqayseh Contracting Est"
      />
      <div className="logo">
       <h3>Al-Muqayseh</h3>
       <p>General Contracting Est.</p>
      </div>
     </NavLink>
     <div className="navbar-items">
      <p className="contact-info">
       CALL US!{" "}
       <a href="tel:00966551606778" className="text-decoration-none">
        <span>+966 55160 6778</span>
       </a>
      </p>
      <div className="menu-action">
       <button
        className="btn btn-primary"
        onClick={() => {
         document.querySelector(".navbar-menu").classList.toggle("inactive");
         document
          .querySelector(".navbar-menu-layer")
          .classList.toggle("inactive");
         document.querySelector(".navbar").classList.toggle("menu-inactive");
        }}
       >
        <MenuRoundedIcon />
       </button>
      </div>
     </div>
    </div>
    <div className="navbar-menu inactive">
     <div className="container">
      <div className="row row-gap-4">
       <div className="col-4">
        <ol className="list-unstyled">
         <div>
          <span>Basic</span>
         </div>
         <li>
          <NavLink to="/">Home</NavLink>
         </li>
         <li>
          <NavLink to="/about-us">About Us</NavLink>
         </li>
         <li>
          <NavLink to="/services">Services</NavLink>
         </li>
         <li>
          <NavLink to="/contact-us">Contact</NavLink>
         </li>
         <li>
          <NavLink to="/career">Career</NavLink>
         </li>
        </ol>
       </div>
       <div className="col-4">
        <ol className="list-unstyled">
         <div>
          <span>About Us</span>
         </div>
         <li>
          <NavLink to="/about-us">Our Company</NavLink>
         </li>
         <li>
          <NavLink to="/about/what-we-do">What We Do</NavLink>
         </li>
         <li>
          <NavLink to="/about/our-team">Our Team</NavLink>
         </li>
         <li>
          <NavLink to="/clients">Our Clients</NavLink>
         </li>
        </ol>
       </div>
       <div className="col-12 col-lg-4">
        <ol className="list-unstyled">
         <div>
          <span>Legal</span>
         </div>
         <li>
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
         </li>
        </ol>
       </div>
      </div>
     </div>
    </div>
   </nav>
   <div
    className="navbar-menu-layer inactive"
    onClick={() => {
     document.querySelector(".navbar-menu").classList.toggle("inactive");
     document.querySelector(".navbar-menu-layer").classList.toggle("inactive");
     document.querySelector(".navbar").classList.toggle("menu-inactive");
    }}
   ></div>
  </div>
 );
}

export default Navbar;
