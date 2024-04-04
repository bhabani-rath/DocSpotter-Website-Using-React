import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
 return (
  <>
   <div className="landing-div" style={{ display: "flex", gap: "20px" }}>
    <Link to="/authentication/rolegetter">Role Getter</Link>
    <Link to="/authentication/login">LogIn</Link>
    <Link to="/authentication/signup">Register</Link>
    <Link to="/doctor/addressfill">Address Fill</Link>
   </div>
  </>
 );
}

export default LandingPage;
