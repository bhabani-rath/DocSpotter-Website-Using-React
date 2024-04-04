import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoleGetter from "./components/Authentication/RoleGetter";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/Register";
import AddressFill from "./components/Doctor/AddressFill";
import LandingPage from "./components/Landing Page/LandingPage";

function App() {
 return (
  <Router>
   <Routes>
    {/* <---============Landing Page============---> */}
    <Route path="/" element={<LandingPage />} />
    {/* <---============Authentication============---> */}
    <Route path="/authentication/rolegetter" element={<RoleGetter />} />
    <Route path="/authentication/login" element={<Login />} />
    <Route path="/authentication/signup" element={<SignUp />} />
    {/* <---============Doctor============---> */}
    <Route path="/doctor/addressfill" element={<AddressFill />} />
   </Routes>
  </Router>
 );
}

export default App;
