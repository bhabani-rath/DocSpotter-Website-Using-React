import React from "react";
import UserPanel from "../Panels/UserPanel";
import { Link, useNavigate } from "react-router-dom";
import logoicon from "../../../assets/MedicalLogo Icon.svg";

const Help = () => {
 const navigate = useNavigate();
 function handleLoginButton() {
  navigate("/authenticated/user/dashboard");
 }
 function handleSignUpButton() {
  navigate("/authenticated/user/dashboard");
 }
 return (
  <UserPanel>
   <div className="main-txt">
    <h1>Contact Us</h1>
    <div className="div-7-landing-page">
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
  </UserPanel>
 );
};

export default Help;
