import React from "react";
import { NavLink } from "react-router-dom";
import "./Signin.css";
import { Footer } from "../Components/Footer";
import img from "../images/signin.JPG";
const SignIn = () => {
  return (
    <>
      <img
        src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw67bc4699/images/banners/sign-in_d.png?yocs=s_"
        alt=""
        id="upperimg"
      />
      <div className="maincontainer">
        <div id="signin">
          <h1>SIGN IN</h1>
          <p>If you already have an account with us, sign in below</p>
          <form id="signinform">
            <label htmlFor="">Email Address</label>
            <input type="email" id="email" />
            <label htmlFor="">Password</label>
            <input type="password" id="password" />
            <input type="submit" value="SIGN IN" />
          </form>
        </div>
        <div id="signup">
          <h2>SIGN UP</h2>
          <p>Create an account to access the best of your favorite store</p>
          <form id="signupform">
            <img
              src={img}
              alt=""
            />
          </form>
          <NavLink to="signup" style={{ textDecoration: "none" }}>
            <button>CREATE AN ACCOUNT</button>
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
