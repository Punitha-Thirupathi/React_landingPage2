import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Netflix/Assests/netflix.png";
/* import SignIn from '../SignIn/SignIn.jsx' */

const Navbar = () => {
  /*  const [action, setAction] = useState("SignIn"); */

  return (
    <div className="header">
      <nav id="navbar">
        <div className="navMenu">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="navBtn">
          <button type="submit" className="langBtn">
            English
          </button>
        
          <button
            type="submit"
            className="btn" 
            /*  className={action === "SignIn" ? "submit gray" : "submit"}
        onClick={() => {
          setAction("SignIn");
        }} */
          >
            Sign In
          </button>
        </div>
      </nav>
      <section id="home"> 

    <div className="homeContent">
      <span className="content">
        The biggest Indian hits. Ready to
         watch here from
      </span>
       <span className="offerPer"> ₹ 149</span>
      <p className="homePara">Join today. Cancel anytime.</p>
      <p className="homePara2">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
    </div>
    <form className="form">
      <input type="email" className="email" placeholder=" Enter Your Email" required />
      <button className="formBtn"> Get Started {">"} </button>
    </form>
  
  </section>
    </div>
    
  );
};
export default Navbar;
