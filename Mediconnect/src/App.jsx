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
             <Route path="/"/>
   </Routes>
  </Router>
 );
}

export default App;
