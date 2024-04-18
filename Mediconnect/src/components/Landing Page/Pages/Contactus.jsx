import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logoicon from "../../../assets/MedicalLogo Icon.svg";

function Contactus() {
 const navigate = useNavigate();
 function handleLoginButton() {
  navigate("/authentication/login");
 }
 function handleSignUpButton() {
  navigate("/authentication/signup");
 }
 return (
  <>
   <div>
    <div className="navbar">
     <img src={logoicon} alt="" />
     <h1>DocSpotter</h1>
     <nav className="nav-navbar">
      <ul className="navbar-ul">
       <li className="li-home">
        <Link to="/">Home</Link>
       </li>
       <li className="li-aboutus">
        <Link to="/aboutus">About Us</Link>
       </li>
       <li className="li-services">
        <Link to="/services">Services</Link>
       </li>
       <li className="li-doctors">
        <Link to="/doctors">Doctors</Link>
       </li>
       <li className="li-contacts">
        <Link to="/Contactus">Contact Us</Link>
       </li>
       <div className="btn-1-login">
        <button type="submit" onClick={handleLoginButton}>
         {" "}
         <span>
          <i className="fa-solid fa-right-to-bracket"></i>
         </span>{" "}
         LogIn
        </button>
        <button type="submit" onClick={handleSignUpButton}>
         <i className="fa-solid fa-user-plus"></i>Sign Up
        </button>
       </div>
      </ul>
     </nav>
    </div>
    <div className="main-txt">
     <h1>Contact Us</h1>
     <div className="div-7-landing-page">
      <div className="text-logo-sec-1">
       <div className="logo-sec">
        <img src={logoicon} alt="error" />
        <h1>DocSpotter</h1>
       </div>
       <p>
        Our goal is to deliver quality of care in a courteous, respectful, and
        compassionate manner. <br /> We hope you will allow us to care for you
        and strive to be the first and best choice for your family healthcare.
       </p>
      </div>
      <div className="text-area-5">
       <h1>Quick Support</h1>
       <small>
        If you have any questions or need help, feel free to contact with our
        team.
       </small>
       <h2>+91 7735449565</h2>
       <small>Near Unit-1,Bhubaneswar,Khordha,Odisha,India </small>
      </div>
     </div>
     <div className="div-8-landing-page">
      <h2>Copyright&nbsp;&nbsp;&copy; 2024 || All Right Reserved! </h2>
     </div>
    </div>
   </div>
  </>
 );
}

export default Contactus;
