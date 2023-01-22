import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { Searchbar } from "./Searchbar";
import { Dropdown } from "./Dropdown";
import { NavLink } from "react-router-dom";
import {
  FaBookOpen,
  FaCreditCard,
  FaRegUserCircle,
  FaShoppingBag,
} from "react-icons/fa";
import logo from "../images/logo.JPG";
const user = localStorage.getItem("User") || "SIGN IN";

const handlelogout = () => {
  localStorage.removeItem("User");
};
export const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="whole-wrapper">
      <div className="navbar-wrapper">
        <div className="left">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div className="center">
          <Searchbar />
        </div>
        <div className="right">
          <div>
            <FaBookOpen />
            <h5>CATALOGUE</h5>
          </div>
          <div>
            <FaCreditCard />
            <h5>CARD</h5>
          </div>
          <div>
            <NavLink to="/cart" style={{ textDecoration: "none" }}>
              <FaShoppingBag />
              <h5>MY BAG</h5>
            </NavLink>
          </div>
          <div style={{ color:"#3a2a7c" , cursor:"pointer"}} onClick={handleClick}>
            <FaRegUserCircle />
            <h5>{user}</h5>
          </div>

        </div>
        {showPopup && (
          <div className="popup-wrapper">
            <NavLink to="/signin" style={{ textDecoration: "none" }}>
              <h5>{user}</h5>
            </NavLink>
            <h5 style={{ color:"#3a2a7c" , cursor:"pointer"}} onClick={() => handlelogout}>LOG OUT</h5>
          </div>
        )}
      </div>
      <Dropdown />
    </div>
  );
};
