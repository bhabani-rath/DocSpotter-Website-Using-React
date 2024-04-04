import React from "react";
import "../../CSS/login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../JS/Fontawsome";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import signUpLogo from "../../assets/Healthcare App Sign Up.svg";

function SignUp() {
 const [Fname, setFname] = useState("");
 const [Lname, setLname] = useState("");
 const [Emails, setEmails] = useState("");
 const [Contact, setContact] = useState("");
 const [Gender, setGender] = useState("");
 const [PassValue, setPassValue] = useState("");
 const [ConfirmPassValue, setConfirmPassValue] = useState("");
 const [Checked, setChecked] = useState(false);
 const [ShowPassword, setShowPassword] = useState(false);
 const navigate = useNavigate();
 /* <---============Update State Based on Input============---> */
 const handleInputChange = (e) => {
  const { name, value } = e.target;
  // Update state based on input name
  switch (name) {
   case "Fname":
    setFname(value);
    break;
   case "Lname":
    setLname(value);
    break;
   case "Emails":
    setEmails(value);
    break;
   case "Contact":
    setContact(value);
    break;
   case "Gender":
    setGender(value);
    break;
   case "PassValue":
    setPassValue(value);
    break;
   case "ConfirmPassValue":
    setConfirmPassValue(value);
    break;
   case "Checked":
    setChecked(!Checked);
    break;
   default:
    break;
  }
 };
 /* <---========================---> */

 /* <---============Toastify Input Fields using switch case============---> */
 const toastify = (e) => {
  const { name, value } = e.target;

  switch (name) {
   case "Fname":
    if (value === "") {
     toast.info("Write your First Name.");
    }
    break;
   case "Lname":
    if (value === "") {
     toast.info("Write your Last Name.");
    }
    break;
   case "Emails":
    if (value === "") {
     toast.info("Write your Email.");
    }
    break;
   case "Contact":
    if (value === "") {
     toast.info("Write your Contact Number.");
    }
    break;
   case "PassValue":
    if (value === "") {
     toast.info("Enter your Password.");
    }
    break;
   case "ConfirmPassValue":
    if (value === "") {
     toast.info("Re-Enter your Password.");
    }
    break;
   case "LoginRedirection":
    toast.success("Redirecting to Login Page");
    setTimeout(() => {
     navigate("/");
    }, 1000);
    break;
   default:
    break;
  }
 };
 /* <---========================---> */
 /* <---============CheckBox State============---> */

 const handleCheckboxChange = () => {
  setChecked(!Checked);
  switch (Checked) {
   case true:
    toast.error("Please check the checkbox");
    break;
   case false:
    toast.success("You agreed with our terms and conditions!");
    break;
   default:
    break;
  }
 };
 /* <---========================---> */
 /* <---============Show/Hide Password Functions============---> */
 const handlePasswordShow = () => {
  setShowPassword(!ShowPassword);
 };
 /* <---============Reset Button============---> */
 const resetBtn = () => {
  setFname("");
  setLname("");
  setEmails("");
  setContact("");
  setGender("");
  setPassValue("");
  setConfirmPassValue("");
  setChecked(false);
  setShowPassword(false);
 };
 /* <---========================---> */
 /* <---============Handle Form Submit============---> */
 const handleSubmit = (e) => {
  e.preventDefault();
  if (
   PassValue === ConfirmPassValue &&
   Checked == true &&
   Fname !== "" &&
   Lname !== "" &&
   Emails !== "" &&
   Contact !== "" &&
   PassValue !== "" &&
   ConfirmPassValue !== ""
  ) {
   toast.success(
    "Registered Successfully || Welcome to the ERA of DocSpotter🙏"
   );
   setTimeout(() => {
    navigate("/authentication/rolegetter");
   }, 1000);
  } else {
   if (PassValue !== ConfirmPassValue) {
    toast.error("Both Passwords should be the same!");
   } else if (!Checked) {
    toast.warn("Please check Terms & Conditions checkbox!");
   } else {
    toast.error("All fields are required!");
   }
  }
 };

 /* <---========================---> */

 return (
  <>
   <div className="main-div-signup">
    <div className="svg-div">
     <figure>
      <img src={signUpLogo} alt="Error 404" />
     </figure>
    </div>
    <div className="form-div">
     <form className="main-form-signup">
      <p className="p1-signup">Sign Up</p>
      <p className="p2-signup">
       Join Doc
       <span className="primary" style={{ color: "var(--color-primary)" }}>
        Spotter
       </span>{" "}
       Today <br /> Your Gateway to Personalized Healthcare Excellence.
      </p>
      <div className="full-name-div">
       <div className="fname">
        <input
         type="text"
         placeholder="First Name"
         id="inp1"
         name="Fname"
         value={Fname}
         onClick={toastify}
         onChange={handleInputChange}
         required
        />
       </div>
       <div className="lname">
        <input
         type="text"
         placeholder="Last Name"
         id="inp2"
         name="Lname"
         value={Lname}
         onClick={toastify}
         onChange={handleInputChange}
         required
        />
       </div>
      </div>
      <div className="mail-id">
       <input
        type="email"
        name="Emails"
        id="inp3"
        placeholder="Email 📧"
        required
        value={Emails}
        onClick={toastify}
        onChange={handleInputChange}
       />
      </div>
      <div className="contact-and-role">
       <div className="contact">
        <input
         type="text"
         id="inp4"
         pattern="[0-9]{10}"
         placeholder="Contact No."
         name="Contact"
         value={Contact}
         onClick={toastify}
         onChange={handleInputChange}
         required
        />
       </div>
       <div className="gender">
        <select id="inp5" className="dropdown-gender" required>
         <option className="select Gender" hidden>
          Gender
         </option>
         <option className="male">Male</option>
         <option className="female">Female</option>
         <option className="rather-not">Rather not to say</option>
        </select>
       </div>
      </div>
      <div className="password-inp">
       <input
        type={ShowPassword ? "text" : "password"}
        className="pass-inp"
        placeholder="Password 🔒"
        id="inp7"
        name="PassValue"
        value={PassValue}
        onClick={toastify}
        onChange={handleInputChange}
        required
       />
       <i
        className={`fa-sharp fa-solid ${
         ShowPassword ? "fa-eye" : "fa-eye-slash"
        }`}
        onClick={handlePasswordShow}
       ></i>
      </div>
      <div className="confirm-pass">
       <input
        type={ShowPassword ? "text" : "password"}
        className="conf-pass"
        id="inp8"
        name="ConfirmPassValue"
        placeholder="Re-Enter Your Password"
        value={ConfirmPassValue}
        onClick={toastify}
        onChange={handleInputChange}
       />
       <i
        className={`fa-sharp fa-solid ${
         ShowPassword ? "fa-eye" : "fa-eye-slash"
        }`}
        onClick={handlePasswordShow}
       ></i>
      </div>
      <div className="checkbox-p-div">
       <div className="checkbox-div-signup">
        <input
         type="checkbox"
         className="term-inp"
         id="inp9"
         name="Checked"
         value={Checked}
         onClick={toastify}
         onChange={handleCheckboxChange}
        />
       </div>
       <div className="checkbox-p-signup">
        <p>
         I agree the{" "}
         <Link className="redirect-login" onClick={toastify}>
          {" "}
          Terms and Conditions{" "}
         </Link>
         of Medify by Registering.
        </p>
       </div>
      </div>
      <div className="btn-div-signup">
       <div className="btn-1">
        <button type="submit" className="submit-btn" onClick={handleSubmit}>
         Sign Up
        </button>
       </div>
       <div className="btn-2">
        <button type="reset" className="reset-btn" onClick={resetBtn}>
         Reset
        </button>
       </div>
      </div>
      <div className="redirect-login-text">
       <p className="p3">
        Have an account?
        <Link
         className="redirect-login"
         name="LoginRedirection"
         onClick={toastify}
        >
         {" "}
         Login
        </Link>
       </p>
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

export default SignUp;
