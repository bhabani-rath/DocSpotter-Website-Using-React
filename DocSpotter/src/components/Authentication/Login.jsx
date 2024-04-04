import React, { useState } from "react";
import "../../CSS/login.css";
import "../../JS/Fontawsome.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
 const [showPassword, setshowPassword] = useState(false);
 const [typePassText, settypePassText] = useState("password");
 const [usernameValue, setusernameValue] = useState("");
 const [passwordValue, setpasswordValue] = useState("");
 const navigate = useNavigate();
 //Function for targeting  the username input field
 const handleUsernameChange = (e) => {
  setusernameValue(e.target.value);
 };
 //Tostify  for Username While Clicking On The Username Field
 const toastClickUsername = () => {
  if (usernameValue == "") {
   toast.info("Fill the field with your Username.😎");
  } else if (usernameValue != "") {
   toast.success("Username Is Already Written.👍");
  }
 };
 //Function  for targeting Password Field
 const handlePasswordChange = (e) => {
  setpasswordValue(e.target.value);
 };
 //Tostify for Username While Hovering On The Password Field
 const toastClickPassword = () => {
  if (passwordValue == "") {
   toast.info("Fill the field with your Password.😉");
  } else if (passwordValue != "") {
   toast.success("Password Already Written.👍");
  }
 };
 //Logic for show tostify when type = pass or text
 const handleCheckboxChange = () => {
  if (showPassword === false && typePassText === "password") {
   settypePassText("text");
   toast.warn("Password Is Visible.💀");
  } else {
   settypePassText("password");
   toast.success("Password is hidden now.🙂");
  }
 };
 //Tosastify and Navigater with timeout for Forgot Password Text Redirector
 const toastNavForgotPassword = () => {
  toast.success("Processing Forgot Password!!!");
  setTimeout(() => {
   navigate("/forgotpass");
  }, 2000);
 };
 //Tosastify and Navigater with timeout for Forgot Password Text Redirector
 const timeIntervalNavDontHaveAccount = () => {
  toast.success("Redirecting to Sign Up Page...");
  setTimeout(() => {
   navigate("/signup");
  }, 2000);
 };
 //Toastify and Navigater with timeout for Signin Button
 const toastNavLoginButton = () => {
  if (usernameValue == "" && passwordValue == "") {
   toast.error("Fill the Username and Password Field");
  } else {
   toast.success("Signin Successfully || Welcome to DocSpotter.");
   setTimeout(() => {
    navigate("/authentication/rolegetter");
   }, 2000);
  }
 };
 return (
  <>
   <div className="main-div">
    <div className="svg-div">
     <figure className="png-health">
      <img src="/src/assets/Healthcare-login-jpg.png" alt="Error 69" />
     </figure>
    </div>
    <div className="form-part-div">
     <p className="p1">Sign In</p>
     <p className="p2">
      Welcome Back to Medify <br /> Secure Access to Your Health Journey.
     </p>
     <form className="main-form">
      <div className="uname-div">
       <input
        type="text"
        id="inp1"
        value={usernameValue}
        className="uname-inp"
        placeholder="Username"
        onClick={toastClickUsername}
        onChange={handleUsernameChange}
       />
      </div>
      <div className="pass-div">
       <input
        className="pass-inp"
        id="inp2"
        value={passwordValue}
        placeholder="Password"
        type={typePassText}
        onClick={toastClickPassword}
        onChange={handlePasswordChange}
       />
      </div>
      <div className="checkbox-div">
       <div className="check">
        <input
         type="checkbox"
         className="checkbox-inp"
         id="inp3"
         onClick={handleCheckboxChange}
        />
        <p>Show Password</p>
       </div>
       <a className="fpass-a" onClick={toastNavForgotPassword}>
        Forgot Password?
       </a>
      </div>
      <div className="btn-div">
       <div className="btn-div-1">
        <button type="button" onClick={toastNavLoginButton}>
         SignIn
        </button>
       </div>
       <div className="btn-div-2">
        <button type="reset">Reset</button>
       </div>
      </div>
      <div className="signup-redirection">
       <Link onClick={timeIntervalNavDontHaveAccount}>
        Don't have an account?
       </Link>
      </div>
     </form>
    </div>
   </div>
   {/* Overall Tostify Editing */}
   <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={true}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    limit={2}
    transition:slide
   />
  </>
 );
}

export default Login;
