import React from "react";
import UserPanel from "../Panels/UserPanel";
import userlogo from "../../../assets/UserPanel/Profile-Picture-Small.jpg";
import { BarChart, LineChart, PieChart } from "@mui/x-charts";

function Home() {
 return (
  <UserPanel>
   <div className="container-home-sections">
    <div className="sec-home-1">
     <h1>Dashboard</h1>
    </div>
    <div className="sec-home-2">
     <img src={userlogo} alt="user-net-404" />
     <h1>
      Welcome! To Health<span>Nest</span>
     </h1>
    </div>
    <div className="sec-home-3">
     <div className="total-hosps card-UP-c">
      <i className="fa-solid fa-hospital icons"></i>
      <h2>Total Hospitals Connected</h2>
      <h3>25000+</h3>
      <small>last 24 hour ago</small>
     </div>
     <div className="total-docs card-UP-c">
      <i className="fa-solid fa-user-doctor icons"></i>
      <h2>Total Doctors Connected</h2>
      <h3>1,00,000+</h3>
      <small>last 24 hour ago</small>
     </div>
     <div className="total-patients card-UP-c">
      <i className="fa-solid fa-bed-pulse icons"></i>
      <h2>Total Patients Connected</h2>
      <h3>5,00,000+</h3>
      <small>last 24 hour ago</small>
     </div>
    </div>
    <div className="sec-home-4">
     <BarChart
      xAxis={[
       {
        scaleType: "band",
        data: ["2020", "2021", "2022", "2023", "2024"],
        label: "Year"
       }
      ]}
      series={[
       { data: [2500, 3750, 3750, 5000, 10000], label: "Hospitals" },
       { data: [15000, 21000, 22000, 18000, 24000], label: "Doctors" },
       { data: [95000, 96000, 87000, 103000, 119000], label: "Patients" }
      ]}
      width={1000}
      height={500}
     />
     <PieChart
      series={[
       {
        data: [
         { id: 0, value: 0.5, label: "Not Cured" },
         { id: 1, value: 75, label: "Cured" },
         { id: 2, value: 24.5, label: "Under Treatment" }
        ]
       }
      ]}
      width={1000}
      height={500}
     />
    </div>
   </div>
  </UserPanel>
 );
}

export default Home;
