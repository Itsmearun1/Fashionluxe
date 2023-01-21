import React, { useState, useEffect } from "react";
import "./AdminDashboard.css" ;
function AdminDashboard() {
  const [bag, setBag] = useState([]);
  const url = "https://6395eda290ac47c68077fa1c.mockapi.io/products/";
  const cust_url = "https://6395eda290ac47c68077fa1c.mockapi.io/users/";
  const ord_url = "https://6395eda290ac47c68077fa1c.mockapi.io/orders/";

  useEffect(() => {
    fetchProducts(url);
  }, []);

  const fetchProducts = (url) => {
    // Fetch code here
  };

  const addForm = () => {
    // Add form code here
  };

  return (
    <div>
      <nav>
        <div className="logo">
          <img
            src="https://drive.google.com/uc?export=view&id=131SPLalKDGafPNr77mSbMgnQdmCyH9pr"
            alt=""
          />
        </div>
        <div className="menu-items">
          <ul className="nav-links">
            <li>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  fetchProducts(url);
                }}
              >
                <i className="uil uil-store"></i>
                <span className="link-name">Products</span>
              </a>
            </li>
            <li>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  addForm();
                }}
              >
                <i className="uil uil-plus"></i>
                <span className="link-name">Add Products</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="uil uil-users-alt"></i>
                <span className="link-name">Customers</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="uil uil-dollar-alt"></i>
                <span className="link-name">Orders</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="uil uil-bill"></i>
                <span className="link-name">Pricing</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="uil uil-percentage"></i>
                <span className="link-name">Discounts</span>
              </a>
            </li>
            <li>
              <a href="index.html">
                <i className="uil uil-sign-out-alt"></i>
                <span className="link-name">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="dashboard">
        <div className="top">
          <div className="search-bar">
            <i className="uil uil-search"></i>
            <input
              type="text"
              placeholder="Search Products..."
              className="search"
              onChange={searchProducts}
            />
          </div>
        </div>
      </section>
      <section className="display-main">{/* Display products here */}</section>
    </div>
  );
}

export default AdminDashboard;
