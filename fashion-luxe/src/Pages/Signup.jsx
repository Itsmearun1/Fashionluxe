import React, { useState } from "react";
import "./Signup.css";
import { Footer } from "../Components/Footer";
import axios from "axios";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const url = "https://63c6507adcdc478e15beeebb.mockapi.io/users";

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email !== confirmEmail) {
      alert("Emails did not match");
      return;
    }
    try {
      const { data } = await axios.get(url);
      let sdata = data.filter((ele) => {
        return (
          ele.email.toLowerCase().includes(email.toLowerCase()) &&
          ele.password.includes(password)
        );
      });
      if (sdata.length > 0) {
        alert("Email Already exists!");
      } else {
        const user = {
          firstName,
          lastName,
          email,
          zip,
          phone,
          password,
        };
        await axios.post(url, user);
        alert("Account created successfully!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div id="container">
        <img
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw6f07f823/images/banners/create-account_d.png?yocs=s_"
          alt=""
          id="upperimg"
        />
        <div className="maincontainer">
          <form id="signup" onSubmit={handleSubmit}>
            <label htmlFor="">First Name</label>
            <input
              type="text"
              id="first_name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              id="last_name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">Confirm Email</label>
            <input
              type="email"
              id="email2"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
            />
            <label htmlFor="">ZIP/Postal Code</label>
            <input
              type="number"
              id="zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
            <label htmlFor="">Phone</label>
            <input
              type="number"
              id="mob"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="CREATE ACCOUNT" />
          </form>
          <p>{status}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
