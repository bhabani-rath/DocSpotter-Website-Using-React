import React from "react";
import { Link } from "react-router-dom";
import logoicon from "../../../assets/MedicalLogo Icon.svg";
import doc_about_1 from "../../../assets/AboutUs/AboutUs Doc IMG 1.jpg";
import doc_about_2 from "../../../assets/AboutUs/AboutUs Doc IMG 2.jpg";

const Aboutus = () => {
 return (
  <>
   <div className="main-landing-div">
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
        <Link>Doctors</Link>
       </li>
       <li className="li-contacts">
        <Link>Contact Us</Link>
       </li>
       <div className="btn-1-login">
        <button type="submit">
         {" "}
         <span>
          <i className="fa-solid fa-right-to-bracket"></i>
         </span>{" "}
         LogIn
        </button>
        <button type="submit">
         <i className="fa-solid fa-user-plus"></i>Sign Up
        </button>
       </div>
      </ul>
     </nav>
    </div>
    <div className="aboutus-div">
     <h1>About Us</h1>
     <div className="doc-about-div-1">
      <img src={doc_about_1} alt="Error-->69" />
      <div className="text-div-about-1">
       <h2>Clinic with Innovative Approach to Treatment</h2>
       <p>
        Porta semper lacus cursus, feugiat primis ultrice in ligula risus lorem
        auctor tempus feugiat dolor lacinia cubilia curae integer congue leo
        metus, eu mollislorem primis in orci integer metus mollis faucibus. An
        enim nullam tempor sapien gravida donec pretium and ipsum porta justo
        integer at velna vitae auctor integer congue
       </p>
       <small>Randon Pexon, Head of Clinic</small>
      </div>
     </div>
     <div className="doc-about-div-2">
      <div className="text-div-about-2">
       <h2>Clinic with Innovative Approach to Treatment</h2>
       <p>
        Porta semper lacus cursus, feugiat primis ultrice in ligula risus lorem
        auctor tempus feugiat dolor lacinia cubilia curae integer congue leo
        metus, eu mollislorem primis in orci integer metus mollis faucibus. An
        enim nullam tempor sapien gravida donec pretium and ipsum porta justo
        integer at velna vitae auctor integer congue
       </p>
       <small>Randon Pexon, Head of Clinic</small>
      </div>
      <img src={doc_about_2} alt="Error-->69" />
     </div>
    </div>
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
  </>
 );
};

export default Aboutus;
