import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoleGetter from "./components/Authentication/RoleGetter";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/Register";
import AddressFill from "./components/Doctor/AddressFill";
import LandingPage from "./components/Landing Page/LandingPage";
import Aboutus from "./components/Landing Page/Pages/Aboutus";
import Services from "./components/Landing Page/Pages/Services";
import Doctors from "./components/Landing Page/Pages/Doctors";
import Contactus from "./components/Landing Page/Pages/Contactus";
import Aside from "./components/Patient/Components/Aside";
import UserPanel from "./components/Patient/Panels/UserPanel";
import Home from "./components/Patient/Pages/Home";
import Hospitals from "./components/Patient/Pages/Hospitals";
import TreatmentHistory from "./components/Patient/Pages/TreatmentHistory";
import Help from "./components/Patient/Pages/Help";
import Bookings from "./components/Patient/Pages/Bookings";
import DoctorsUPanel from "./components/Patient/Pages/DoctorsUPanel";
import TransactionHistory from "./components/Patient/Pages/TransactionHistory";

function App() {
 return (
  <Router>
   <Routes>
    {/* <---============Landing Page============---> */}
    <Route path="/" element={<LandingPage />} />
    <Route path="/aboutus" element={<Aboutus />} />
    <Route path="/services" element={<Services />} />
    <Route path="/doctors" element={<Doctors />} />
    <Route path="/Contactus" element={<Contactus />} />
    {/* <---============Authentication============---> */}
    <Route path="/authentication/rolegetter" element={<RoleGetter />} />
    <Route path="/authentication/login" element={<Login />} />
    <Route path="/authentication/signup" element={<SignUp />} />
    {/* <---============Doctor============---> */}
    <Route path="/doctor/addressfill" element={<AddressFill />} />
    {/* <---============User============---> */}
    <Route path="/user/aside" element={<Aside />} />
    <Route path="/user/userpanel" element={<UserPanel />} />
    <Route path="/user/userpanel/home" element={<Home />} />
    <Route path="/user/userpanel/hospitals" element={<Hospitals />} />
    <Route path="/user/userpanel/doctors" element={<DoctorsUPanel />} />
    <Route path="/user/userpanel/bookings" element={<Bookings />} />
    <Route
     path="/user/userpanel/treatmenthistory"
     element={<TreatmentHistory />}
    />
    <Route
     path="/user/userpanel/transactionhistory"
     element={<TransactionHistory />}
    />
    <Route path="/user/userpanel/help" element={<Help />} />
   </Routes>
  </Router>
 );
}

export default App;
