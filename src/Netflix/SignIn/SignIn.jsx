import React from "react";
import "./SignIn.css";
import netflix from "../../Netflix/download-removebg-preview.png";

const SignIn = () => {
  return (
    <div>
      <nav>
        <a href="#">
          <img src={netflix} alt="logo" />
        </a>
      </nav>
      <div className="form-wrapper">
        <h2>Sign In</h2>
        <form action="#">
          <div className="form-control">
            <input type="text" required />
            <label>Email or phone number</label>
          </div>
          <div className="form-control">
            <input type="password" required />
            <label>Password</label>
          </div>
          <button type="submit">Sign In</button>
          <div className="form-help">
            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <a href="#">Need help?</a>
          </div>
        </form>
        <p>New to Netflix? <a href="#">Sign up now</a></p>
        <small>
          This page is protected by Google reCAPTCHA
          to ensure you're not a bot.
          <a href="#">Learn more.</a>
        </small>
      </div>
    </div>
  );
  
  
};
<div>
      <nav>
        <a href="#">
          <img src={netflix} alt="logo" />
        </a>
      </nav>
      <div className="form-wrapper">
        <h2>Sign Up</h2>
        <form action="#">
          <div className="form-control">
            <input type="text" required />
            <label>Email or phone number</label>
          </div>
          <div className="form-control">
            <input type="password" required />
            <label>Password</label>
          </div>
          <button type="submit">Sign In</button>
          <div className="form-help">
            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <a href="#">Need help?</a>
          </div>
        </form>
        <p>New to Netflix? <a href="#">Sign up </a></p>
        <small>
          This page is protected by Google reCAPTCHA
          to ensure you're not a bot.
          <a href="#">Learn more.</a>
        </small>
      </div>
    </div>

export default SignIn;
