import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logoicon from "../../../assets/MedicalLogo Icon.svg";
import doc1 from "../../../assets/Doctor/Dr. Jonathan Barnes.jpg";
import doc2 from "../../../assets/Doctor/Dr. Hannah Harper.jpg";
import doc3 from "../../../assets/Doctor/Dr. Mathew Anderson.jpg";
import doc4 from "../../../assets/Doctor/Dr Megan Coleman.jpg";
import doc5 from "../../../assets/Doctor/Joshua Elledge.jpg";
import doc6 from "../../../assets/Doctor/Pratap Bharadwaj.jpg";
import doc7 from "../../../assets/Doctor/Robert Peterson.jpg";
import doc8 from "../../../assets/Doctor/Sham M Juratli.jpg";

function Doctors() {
 const navigate = useNavigate();
 function handleLoginButton() {
  navigate("/authentication/login");
 }
 function handleSignUpButton() {
  navigate("/authentication/signup");
 }

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
        <Link to="/doctors">Doctors</Link>
       </li>
       <li className="li-contacts">
        <Link to="/Contactus">Contact Us</Link>
       </li>
       <div className="btn-1-login">
        <button type="submit" onClick={handleLoginButton}>
         {" "}
         <span>
          <i class="fa-solid fa-right-to-bracket"></i>
         </span>{" "}
         LogIn
        </button>
        <button type="submit" onClick={handleSignUpButton}>
         <i class="fa-solid fa-user-plus"></i>Sign Up
        </button>
       </div>
      </ul>
     </nav>
    </div>
    <div className="docs-text-area-frame">
     <h1>Meet Doctors Connected To Our Platform</h1>
     <p>
      Our administration and support staff all have exceptional people skills
      and trained to assist you with all medical enquiries.
     </p>
    </div>
    <div className="docs-card-frame">
     <div className="docs-card-c">
      <img src={doc1} alt="" />
      <h2>Dr. Jonathan Barnes</h2>
      <small>Chief Medical Officer</small>
      <button type="button">More Info</button>
     </div>
     <div className="docs-card-c">
      <img src={doc2} alt="" />
      <h2>Hannah Harper D.M.</h2>
      <small>Anesthesiologist</small>
      <button type="button">More Info</button>
     </div>
     <div className="docs-card-c">
      <img src={doc3} alt="" />
      <h2>Matthew Anderson D.M.</h2>
      <small>Cardiology Specialist</small>
      <button type="button">More Info</button>
     </div>
     <div className="docs-card-c">
      <img src={doc4} alt="" />
      <h2>Megan Coleman D.M.</h2>
      <small>Neurosurgeon Specialist</small>
      <button type="button">More Info</button>
     </div>
     <div className="docs-card-c">
      <img src={doc5} alt="" />
      <h2>Robert Peterson D.M.</h2>
      <small>Allergist Specialist</small>
      <button type="button">More Info</button>
     </div>
     <div className="docs-card-c">
      <img src={doc6} alt="" />
      <h2>Joshua Elledge D.M.</h2>
      <small>Orthopaedics specialist</small>
      <button type="button">More Info</button>
     </div>
     <div className="docs-card-c">
      <img src={doc7} alt="" />
      <h2>Pratap Bhardwaj, MD</h2>
      <small>Child Specialist</small>
      <button type="button">More Info</button>
     </div>
     <div className="docs-card-c">
      <img src={doc8} alt="" />
      <h2>Sham M Juratli, MD</h2>
      <small>Family Medicine</small>
      <button type="button">More Info</button>
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
}

export default Doctors;
