import React from "react";
import "./Footer.css";

const sections = [  {    title: "Customer Service",    items: [      "Contact Us",      "Shopping Info",      "Shipping Info",      "Returns",      "Exchanges",      "Billing & Payment",      "Size & Fit",      "International",      "FAQ",      "Rewards",      "Perks"    ]
  },
  {
    title: "My Account",
    items: [
      "Sign In / Register",
      "Track My Order",
      "Return Order",
      "Order History",
      "Wishlist",
      "Offers & Coupons",
      "Rewards"
    ]
  },
  {
    title: "Credit Card",
    items: [
      "Apply Now",
      "Learn More",
      "Pay My Bill",
      "Catalog",
      "Order From Catalog",
      "Request a Catalog"
    ]
  },
  {
    title: "FashionLuxe",
    items: [
      "About Us",
      "About Fullbeauty Brands",
      "Shipping To",
      "India"
    ]
  }
];

export const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-sections">
        {sections.map((section, index) => (
          <div key={index} className="footer-section">
            <h4>{section.title}</h4>
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

