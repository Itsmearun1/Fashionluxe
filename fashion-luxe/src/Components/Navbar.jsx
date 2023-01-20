import React from "react";
import "./Navbar.css";
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
import { Home } from "../Pages/Home";
export const Navbar = () => {
  return (
    <div className="whole-wrapper">
      <div className="navbar-wrapper">
        <div className="left">
          <NavLink to="/">
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
            <FaRegUserCircle />
            <h5>SIGN IN</h5>
          </div>
          <div>
            <NavLink to="/cart">
              <FaShoppingBag />
              <h5>MY BAG</h5>
            </NavLink>
          </div>
        </div>
      </div>
      <Dropdown />
    </div>
  );
};
