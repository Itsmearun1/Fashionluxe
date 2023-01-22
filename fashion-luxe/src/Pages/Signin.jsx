import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./Signin.css";
import { Footer } from "../Components/Footer";
import img from "../images/signin.JPG";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [username, setUsername] = useState("");
  const url = "https://63c6507adcdc478e15beeebb.mockapi.io/users";
  const navigate = useNavigate();
  const [alldata,setAlldata] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.get(url);
      // setAlldata(data);
      let sdata = data.filter((ele) => {
        return (
          ele.email.toLowerCase().includes(email.toLowerCase()) &&
          ele.password.includes(password)
        );
      });
      if (sdata.length > 0) {
        var mail = sdata[0].email;
        var pass = sdata[0].password;
      }
      if (sdata.length === 0) {
        alert("Wrong Credintials");
      } else if (mail === "admin@mail.com" && pass === "admin") {
        alert("Admin Sign In Successful");
        localStorage.setItem("User", sdata[0].firstName);
        setUsername("admin");
        navigate("/dashboard");
      } else {
        alert("Sign In Successful");
        setUsername("logged in");
        console.log(sdata);
        localStorage.setItem("User", sdata[0].firstName);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

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
          <form id="signinform" onSubmit={handleSubmit}>
            <label htmlFor="">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="SIGN IN" />
          </form>
          <p>{status}</p>
        </div>
        <div id="signup">
          <h2>SIGN UP</h2>
          <p>Create an account to access the best of your favorite store</p>
          <form id="signupform">
            <img src={img} alt="" />
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
