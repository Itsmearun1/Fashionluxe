import React from "react";
import "./Navbar.css";
import { Searchbar } from "./Searchbar";
import {
  FaBookOpen,
  FaCreditCard,
  FaRegUserCircle,
  FaShoppingBag,
} from "react-icons/fa";
import logo from "../images/logo.JPG";
export const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="left">
        <img src={logo} alt="" />
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
          <FaRegUserCircle />
          <h5>SIGN IN</h5>
        </div>
        <div>
          <FaShoppingBag />
          <h5>MY BAG</h5>
        </div>
      </div>
    </div>
  );
};
