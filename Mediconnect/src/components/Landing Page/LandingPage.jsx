import React from "react";
import "../../CSS/App.css";
import logoicon from "../../assets/MedicalLogo Icon.svg";
import tablets from "../../assets/Tablets.png";
import { Link } from "react-router-dom";
import doctornone from "../../assets/Card Pics Landing Page/doctor-none.png";
import heartinhand from "../../assets/Card Pics Landing Page/heart-in-hand.png";
import mediprescription from "../../assets/Card Pics Landing Page/medical-prescription.png";
import stetho from "../../assets/Card Pics Landing Page/Stethoscope.png";
import heart from "../../assets/Card Pics Landing Page/heart.png";
import syringe from "../../assets/Card Pics Landing Page/syringe.png";
import doc1 from "../../assets/Doctor/Dr. Jonathan Barnes.jpg";
import doc2 from "../../assets/Doctor/Dr. Hannah Harper.jpg";
import doc3 from "../../assets/Doctor/Dr. Mathew Anderson.jpg";
import doc4 from "../../assets/Doctor/Dr Megan Coleman.jpg";
import hosplogoly from "../../assets/alert2.png";

function LandingPage() {
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
    <div className="div-2-landing-page">
     <div className="text-area-lp">
      <h1>Find The Best Doctor Near By You</h1>
      <p>
       Qualified doctors available six days a week, view our timetable to make
       an appointment. Please feel free to contact our friendly reception staff
       with any general or medical enquiry.
      </p>
     </div>
    </div>
    <div className="div-3-landing-page">
     <img src={tablets} alt="Error69" />
     <div className="text-area-1">
      <p>The Best Medical Slot Booking Website!</p>
      <h1>Improving The Quality Of Your Life Through Better Health.</h1>
      <h5>
       Snakes are sometimes perceived as evil, but they are also perceived as
       medicine. If you look at an ambulance, there's the two snakes on the side
       of the ambulance. The caduceus, or the staff of Hermes, there's the two
       snakes going up it, which means that the venom can also be healing.
      </h5>
     </div>
    </div>
    <div className="div-4-landing-page">
     <div className="main-card-frame">
      <div className="text-area-2">
       <h1>Caring For The Health Of You And Your Family.</h1>
       <p>
        Health caring elicits trust, fuller patient disclosure, and accurate
        assessment of the goals of care. <br /> It heightens patient
        satisfaction and decreases the likelihood of complaints or litigation.
        Health caring might even enhance job satisfaction.
       </p>
      </div>
      <div className="cards-landing-page">
       <div className="card-c1">
        <img src={stetho} alt="img-stetho" />
        <h2>Medical Advices & Check Ups</h2>
        <p>
         Complications and failures from dental implant surgeries are few and
         far between, but they do occur. Causes of implant failure include gum
         disease.
        </p>
        <button>More Info</button>
       </div>
       <div className="card-c2">
        <img src={heartinhand} alt="img-heartinhand" />
        <h2>Trusted Medical Treatment</h2>
        <p>
         A place where blood is collected from donors, typed, separated into
         components, stored, and prepared for transfusion to recipients.
        </p>
        <button>More Info</button>
       </div>
       <div className="card-c3">
        <img src={mediprescription} alt="img-prescrip" />
        <h2>Emergency Help Available 24/7</h2>
        <p>
         A tooth extraction, or dental extraction, is the removal of a tooth
         from its socket in the bone. There are a number of reasons why tooth
         clean
        </p>
        <button>More Info</button>
       </div>
       <div className="card-c4">
        <img src={doctornone} alt="img-doctor-none" />
        <h2>Medicine Professionals</h2>
        <p>
         You should visit the dentist every six months for teeth cleanings.
         Tartar is a hard buildup of plaque that forms on the teeth.
        </p>
        <button>More Info</button>
       </div>
       <div className="card-c5">
        <img src={heart} alt="img-heart" />
        <h2>Only Qualified Doctors Support</h2>
        <p>
         Many people are discovering the benefits of veneers. Veneers are thin
         coverings that are placed over the front part of the teeth.
        </p>
        <button>More Info</button>
       </div>
       <div className="card-c6">
        <img src={syringe} alt="img-syringe" />
        <h2>Cutting Edge Facility Implement</h2>
        <p>
         Medical scientists typically need a Ph. D. or medical degree.
         Applicants to either of these programs typically need a bachelor's
         degree in biology.
        </p>
        <button>More Info</button>
       </div>
      </div>
     </div>
    </div>
    <div className="div-5-landing-page">
     <div className="text-area-3">
      <h1>Meet Our Doctors</h1>
      <p>
       Our administration and support staff all have exceptional people skills
       <br />
       and trained to assist you with all medical enquiries.
      </p>
     </div>
     <div className="doctor-card-frame">
      <div className="card-doc-1">
       <img src={doc1} alt="error" />
       <h5>Dr. Jonathan Barnes</h5>
       <small>Chief Medical Officer</small>
       <button>More Info</button>
      </div>
      <div className="card-doc-2">
       <img src={doc2} alt="error" />
       <h5>Dr. Hannah Harper</h5>
       <small>Anesthesiologist</small>
       <button>More Info</button>
      </div>
      <div className="card-doc-3">
       <img src={doc3} alt="error" />
       <h5>Dr. Matthew Anderson</h5>
       <small>Cardiology Specialist</small>
       <button>More Info</button>
      </div>
      <div className="card-doc-4">
       <img src={doc4} alt="error" />
       <h5>Dr. Megan Coleman</h5>
       <small>Neurosurgeon Specialist</small>
       <button>More Info</button>
      </div>
     </div>
     <button>All Doctors Profile</button>
    </div>
    <div className="div-6-landing-page">
     <img src={hosplogoly} alt="" />
     <div className="text-area-4">
      <h1>True Healthcare For Your Family!</h1>
      <p>
       Serve the community by improving the quality of life through better
       health. We have put protocols to protect our patients and staff while
       continuing to provide medically necessary care.
      </p>
      <button>Make An Appointment</button>
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

export default LandingPage;
