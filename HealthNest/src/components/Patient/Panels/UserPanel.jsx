import React from "react";
import Aside from "./../Components/Aside";

function UserPanel({ children }) {
 return (
  <>
   <div className="containers">
    <Aside />
    <div className="user-panel-dash-area">{children}</div>
   </div>
  </>
 );
}

export default UserPanel;
