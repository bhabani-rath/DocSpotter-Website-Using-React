import React from "react";
import { Link } from "react-router-dom";
import logomediconnect from "../../../assets/UserPanel/Profile-Picture-Small.jpg";

function Aside() {
 return (
  <>
   <div className="sidebar-container">
    {" "}
    <nav className="sidepanel">
     <ul>
      <li>
       <Link to="/user/userpanel/home" className="logo">
        <img src={logomediconnect} alt="" />
       </Link>
      </li>
      <li>
       <Link to="/user/userpanel/home">
        <i className="fas fa-home"></i>
        <span className="nav-item">Home</span>
       </Link>
      </li>
      <li>
       <Link to="/user/userpanel/hospitals">
        <i class="fa-regular fa-hospital"></i>
        <span className="nav-item">Hospitals</span>
       </Link>
      </li>
      <li>
       <Link to="/user/userpanel/doctors">
        <i class="fa-solid fa-user-doctor"></i>{" "}
        <span className="nav-item">Doctors</span>
       </Link>
      </li>
      <li>
       <Link to="/user/userpanel/bookings">
        <i class="fa-solid fa-check-to-slot"></i>{" "}
        <span className="nav-item">Bookings</span>
       </Link>
      </li>
      <li>
       <Link to="/user/userpanel/treatmenthistory">
        <i class="fa-solid fa-suitcase-medical"></i>
        <span className="nav-item">Treatment History</span>
       </Link>
      </li>
      <li>
       <Link to="/user/userpanel/transactionhistory">
        <i class="fa-solid fa-money-bills"></i>
        <span className="nav-item">Transaction History</span>
       </Link>
      </li>
      <li>
       <Link to="/user/userpanel/help">
        <i className="fas fa-question-circle"></i>
        <span className="nav-item">Help</span>
       </Link>
      </li>
      <li>
       <Link to="/" className="logout">
        <i className="fas fa-sign-out-alt"></i>
        <span className="nav-item">Log out</span>
       </Link>
      </li>
     </ul>
    </nav>
   </div>
  </>
 );
}

export default Aside;
