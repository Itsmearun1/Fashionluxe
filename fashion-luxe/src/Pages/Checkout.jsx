import React, { useState } from "react";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  const navigate=useNavigate();
  const checkout = JSON.parse(localStorage.getItem("checkout")) || { price: 0, quantity: 0 };
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState("");
  const [upi, setUpi] = useState("");
  const [address, setAddress] = useState("");

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCardDetailsChange = (e) => {
    setCardDetails(e.target.value);
  };

  const handleUpiChange = (e) => {
    setUpi(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleConfirmOrder = () => {
    alert("Order has been confirmed")
    navigate("/");
    console.log({
      paymentMethod,
      cardDetails,
      upi,
      address,
      checkout,
    });
  };

  return (
    <div className="checkout">
      <h2>Chekout</h2>
      <div className="checkout-section">
        <h3>Cart Details</h3>
        Items In Cart: {checkout.quantity}
        <br />
        Total Price: ₹{checkout.price}
      </div>
      <div className="checkout-section">
        <h3>Payment Method</h3>
        <div>
          <input
            type="radio"
            id="card"
            name="paymentMethod"
            value="card"
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="card">Card</label>
          {paymentMethod === "card" && (
            <input
              className="input-field"
              type="text"
              placeholder="Card details"
              onChange={handleCardDetailsChange}
            />
          )}
        </div>
        <div>
          <input
            type="radio"
            id="upi"
            name="paymentMethod"
            value="upi"
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="upi">UPI</label>
          {paymentMethod === "upi" && (
            <input
              className="input-field"
              type="text"
              placeholder="UPI"
              onChange={handleUpiChange}
            />
          )}
        </div>
        <div>
          <input
            type="radio"
            id="cod"
            name="paymentMethod"
            value="cod"
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="cod">Pay on Delivery</label>
        </div>
      </div>
      <div className="checkout-section">
        <h3>Shipping Address</h3>
        <textarea className="input-field" onChange={handleAddressChange} />
      </div>
      <button className="confirm-button" onClick={handleConfirmOrder}>
        Confirm Order
      </button>
    </div>
  );
};

export default Checkout;
