import React from "react";
import UserPanel from "../Panels/UserPanel";

const Bookings = () => {
 return (
  <UserPanel>
   <div className="booking-form-div">
    <h1 className="h1-head">Booking Slots</h1>
    <form className="booking-form">
     <h2>Booking For Dr.Jonathan Barnes </h2>
     <div className="name-div">
      <input type="text" placeholder="First Name" required readOnly disabled />
      <input type="text" placeholder="Last Name" required readOnly disabled />
     </div>
     <div className="mail-contact-div">
      <input type="email" placeholder="Email" required readOnly disabled />
      <input type="text" placeholder="Contact No." required readOnly disabled />
     </div>
     <div className="gender-book-type-slot">
      <select className="" required disabled>
       <option value="default" hidden>
        Select Gender
       </option>
       <option value="male" disabled>
        Male
       </option>
       <option value="female" disabled>
        Female
       </option>
       <option value="other" disabled>
        Others
       </option>
       <option value="none" disabled>
        Rather not Say
       </option>
      </select>
      <select className="book-type-option" required>
       <option value="default" hidden>
        Select Booking Type
       </option>
       <option value="online">Online Booking</option>
       <option value="offline">Offline Booking</option>
      </select>
      <select className="slot-select-option">
       <option value="0" hidden>
        Select Slot Time
       </option>
       <option value="1">8.00AM - 9.30AM</option>
       <option value="2">11.30AM - 1.30PM</option>
       <option value="3">3.50PM - 6.00PM</option>
       <option value="4">7.30PM - 9.30PM</option>
      </select>
     </div>
     <div className="text-descp-disease">
      <textarea cols="50" rows="5"></textarea>
     </div>
     <div className="btn-booking-form">
      <button type="submit">Book Now</button>
      <button type="reset">Cancel</button>
     </div>
    </form>
   </div>
  </UserPanel>
 );
};

export default Bookings;
