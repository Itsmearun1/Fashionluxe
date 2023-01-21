import React from "react";
import "./Signup.css";
import { Footer } from "../Components/Footer";
const Signup = () => {
  return (
    <>
      <div id="container">
        <img
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw6f07f823/images/banners/create-account_d.png?yocs=s_"
          alt=""
          id="upperimg"
        />
        <div className="maincontainer">
          <form action="" id="signup">
            <label htmlFor="">First Name</label>
            <input type="text" id="first_name" />
            <label htmlFor="">Last Name</label>
            <input type="text" id="last_name" />
            <label htmlFor="">Email</label>
            <input type="email" id="email" />
            <span id="emailspan"></span>
            <label htmlFor="">Confirm Email</label>
            <span id="emailspan2"></span>
            <input type="email" id="email2" />
            <label htmlFor="">ZIP/Postal Code</label>
            <input type="number" id="zip" />
            <label htmlFor="">Phone</label>
            <input type="number" id="mob" />
            <label htmlFor="">Password</label>
            <input type="password" id="password" />
            <input type="submit" value="CREATE ACCOUNT" />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
