import React, { useState } from "react";
import UserPanel from "../Panels/UserPanel";
import afmc from "../../../assets/HospitalsLogo/AFMC.jpeg";
import aiims from "../../../assets/HospitalsLogo/AIIMS.jpeg";
import apollo from "../../../assets/HospitalsLogo/APOLLO.jpeg";
import cmc from "../../../assets/HospitalsLogo/Christrian Medical Clg.jpeg";
import fortis from "../../../assets/HospitalsLogo/Fortis.jpg";
import medanta from "../../../assets/HospitalsLogo/Medanta.jpeg";
import narayan from "../../../assets/HospitalsLogo/Narayana.jpeg";
import tmo from "../../../assets/HospitalsLogo/Tata_Memorial.jpeg";

const Hospitals = () => {
 const [searchText, setSearchText] = useState("");

 const handleSearchChange = (event) => {
  setSearchText(event.target.value);
 };

 const handleClearSearch = () => {
  setSearchText("");
 };

 return (
  <UserPanel>
   <div className="container-hospital-sections">
    <div className="sec-hosp-1">
     <h1>Hospitals</h1>
    </div>
    <div className="sec-hosp-2">
     <div
      style={{
       display: "flex",
       alignItems: "center",
       borderRadius: "5px",
       padding: "5px"
      }}
     >
      <input
       type="text"
       value={searchText}
       onChange={handleSearchChange}
       placeholder="Search..."
      />
      {searchText && (
       <button
        onClick={handleClearSearch}
        style={{ border: "none", background: "none", cursor: "pointer" }}
       >
        <i class="fa-solid fa-xmark"></i>
       </button>
      )}
     </div>
    </div>
    <div className="sec-hosp-3">
     <div className="sec-hosp-3">
      <div className="hosp-c-1 hospital-cardviews">
       <img src={aiims} alt="" />
       <h1>AIIMS</h1>
       <small>New Delhi,India</small>
      </div>
      <div className="hosp-c-2 hospital-cardviews">
       <img src={apollo} alt="" />
       <h1>Apollo Hospitals</h1>
       <small>Chennai,India</small>
      </div>
      <div className="hosp-c-3 hospital-cardviews">
       <img src={medanta} alt="" />
       <h1>Medanta</h1>
       <small>Gurugram</small>
      </div>
      <div className="hosp-c-4 hospital-cardviews">
       <img src={afmc} alt="" />
       <h1>AFMC</h1>
       <small>Pune</small>
      </div>
      <div className="hosp-c-5 hospital-cardviews">
       <img src={cmc} alt="" />
       <h1>Christian Medical College </h1>
       <small>Vellore</small>
      </div>
      <div className="hosp-c-6 hospital-cardviews">
       <img src={fortis} alt="" />
       <h1>Fortis Hospital</h1>
       <small>Mumbai</small>
      </div>
      <div className="hosp-c-7 hospital-cardviews">
       <img src={narayan} alt="" />
       <h1>Narayana Hrudayalaya</h1>
       <small>Bengaluru</small>
      </div>
      <div className="hosp-c-8 hospital-cardviews">
       <img src={tmo} alt="" />
       <h1>Tata Memorial Hospital</h1>
       <small>Mumbai</small>
      </div>
     </div>
    </div>
   </div>
  </UserPanel>
 );
};

export default Hospitals;
