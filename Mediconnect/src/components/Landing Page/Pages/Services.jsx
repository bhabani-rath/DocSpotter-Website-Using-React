import React from "react";
import { Link } from "react-router-dom";
import logoicon from "../../../assets/MedicalLogo Icon.svg";
import heartinhand from "../../../assets/Card Pics Landing Page/heart-in-hand.png";
import mediprescription from "../../../assets/Card Pics Landing Page/medical-prescription.png";
import stetho from "../../../assets/Card Pics Landing Page/Stethoscope.png";
import heart from "../../../assets/Card Pics Landing Page/heart.png";
import syringe from "../../../assets/Card Pics Landing Page/syringe.png";
import doctornone from "../../../assets/Card Pics Landing Page/doctor-none.png";

function Services() {
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
        <button type="submit">
         {" "}
         <span>
          <i class="fa-solid fa-right-to-bracket"></i>
         </span>{" "}
         LogIn
        </button>
        <button type="submit">
         <i class="fa-solid fa-user-plus"></i>Sign Up
        </button>
       </div>
      </ul>
     </nav>
    </div>
    <div className="service-first-div">
     <h3>The Best Platform for Your Healthcare Needs!</h3>
     <h1>Total Health Care Solutions</h1>
     <h2>Providing Medical Care For The Sickest In Our Community.</h2>
    </div>
    <div className="services-card-frame">
     <div className="card-services-c1">
      <img src={stetho} alt="stetho69" />
      <h2>Medical Advices & Check Ups</h2>
      <p>
       Complications and failures from dental implant surgeries are few and far
       between, but they do occur. Causes of implant failure include gum
       disease.
      </p>
      <button type="button">More Info</button>
     </div>
     <div className="card-services-c2">
      <img src={heartinhand} alt="" />
      <h2>Trusted Medical Treatment</h2>
      <p>
       A place where blood is collected from donors, typed, separated into
       components, stored, and prepared for transfusion to recipients.
      </p>
      <button type="button">More Info</button>
     </div>
     <div className="card-services-c3">
      <img src={mediprescription} alt="" />
      <h2>Emergency Help Available 24/7</h2>
      <p>
       A tooth extraction, or dental extraction, is the removal of a tooth from
       its socket in the bone. There are a number of reasons why tooth clean
      </p>
      <button type="button">More Info</button>
     </div>
     <div className="card-services-c4">
      <img src={doctornone} alt="" />
      <h2>Medical Research Professionals</h2>
      <p>
       You should visit the dentist every six months for teeth cleanings. Tartar
       is a hard buildup of plaque that forms on the teeth.
      </p>
      <button type="button">More Info</button>
     </div>
     <div className="card-services-c5">
      <img src={heart} alt="" />
      <h2>Only Qualified Doctors Support</h2>
      <p>
       Many people are discovering the benefits of veneers. Veneers are thin
       coverings that are placed over the front part of the teeth.
      </p>
      <button type="button">More Info</button>
     </div>
     <div className="card-services-c6">
      <img src={syringe} alt="" />
      <h2>Cutting Edge Facility Implement</h2>
      <p>
       Medical scientists typically need a Ph. D. or medical degree. Applicants
       to either of these programs typically need a bachelor's degree in
       biology.
      </p>
      <button type="button">More Info</button>
     </div>
     <div className="card-services-c7">
      <img src={stetho} alt="" />
      <h2>Affordable Prices For All Patients</h2>
      <p>
       Complications and failures from dental implant surgeries are few and far
       between, but they do occur. Causes of implant failure include gum
       disease.
      </p>
      <button type="button">More Info</button>
     </div>
     <div className="card-services-c8">
      <img src={heartinhand} alt="" />
      <h2>Quality Care For Every Patient</h2>
      <p>
       A place where blood is collected from donors, typed, separated into
       components, stored, and prepared for transfusion to recipients
      </p>
      <button type="button">More Info</button>
     </div>
     <div className="card-services-c9">
      <img src={mediprescription} alt="" />
      <h2>Tooth Extractions</h2>
      <p>
       A tooth extraction, or dental extraction, tooth from its socket in the
       bone. That's why tooth removal may be necessary.
      </p>
      <button type="button">More Info</button>
     </div>
     <div className="card-services-c10">
      <img src={mediprescription} alt="" />
      <h2>Teeth Cleanings</h2>
      <p>
       You should visit the dentist every six months for teeth cleanings. Tartar
       is a hard buildup of plaque that forms on the teeth.
      </p>
      <button type="button">More Info</button>
     </div>
     <div className="card-services-c11">
      <img src={heart} alt="" />
      <h2>Dental Veneers</h2>
      <p>
       Many people are discovering the benefits of veneers. Veneers are thin
       coverings that are placed over the front part of the teeth.
      </p>
      <button type="button">More Info</button>
     </div>
     <div className="card-services-c12">
      <img src={syringe} alt="" />
      <h2>Medicine Research</h2>
      <p>
       Medical scientists typically need a Ph. D. or medical degree. Applicants
       to either of these programs typically need a degree.
      </p>
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

export default Services;
