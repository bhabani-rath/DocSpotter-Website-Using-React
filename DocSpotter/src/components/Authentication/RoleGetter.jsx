import React, { useState } from "react";
import rolegetter from "../../assets/rolegetter-removebg.png";
import docimg from "../../assets/Doctor-Char.png";
import patientimg from "../../assets/patient.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function RoleGetter() {
 const navigate = useNavigate();
 const [doctorClicked, setDoctorClicked] = useState(false);
 const [patientClicked, setPatientClicked] = useState(false);

 const handleClick = (role) => {
  // Logic for when the div is clicked
  if (role === "doctor") {
   setDoctorClicked(true);
   setPatientClicked(false);
   toast.success("Redirecting to LogIn Page");
   setTimeout(() => {
    navigate("/doctor/addressfill");
   }, 1000);
  } else if (role === "patient") {
   setDoctorClicked(false);
   setPatientClicked(true);
  }
 };

 return (
  <>
   <div className="main-div" style={{ overflow: "hidden" }}>
    <div className="svg-div" style={{ marginTop: "100px" }}>
     <img src={rolegetter} alt="Error 404" />
    </div>
    <div className="form-part-div">
     <form>
      <h1 className="p1">Who are You</h1>
      <h2 className="p2" style={{ textAlign: "left", fontWeight: "500" }}>
       Discover the power to instantly verify a doctor's availability <br /> at
       any hospital with DocSpotter.
      </h2>
      <div className="role-chooser">
       <div
        className={"doctor-div " + (doctorClicked ? "clicked" : "")}
        onClick={() => handleClick("doctor")}
       >
        <img src={docimg} alt="Doctor 404" />
        <h1 className="p1">Doctor</h1>
       </div>
       <div
        className={"patient-div " + (patientClicked ? "clicked" : "")}
        onClick={() => handleClick("patient")}
       >
        <img src={patientimg} alt="Doctor 404" />
        <h1 className="p1">Patient</h1>
       </div>
      </div>
     </form>
    </div>
   </div>
   <ToastContainer
    position="top-right"
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop={true}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    transition:slide
    toastContainerClassName="custom-toast-container"
    limit="5"
    bodyClassName="toastBody"
    progressClassName="toastBody"
   />
  </>
 );
}

export default RoleGetter;
