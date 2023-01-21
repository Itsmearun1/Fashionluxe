import React, { useState, useEffect } from "react";
import "./Chekout.css";
const Payment = () => {
  const [data, setData] = useState({});
  const [price, setPrice] = useState("");
  const payForm = React.createRef();

  useEffect(() => {
    const checkoutData = JSON.parse(localStorage.getItem("checkout_data"))[0];
    setData(checkoutData);
    setPrice(localStorage.getItem("price"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      payForm.current.cname.value === "" ||
      payForm.current.cnumber.value === "" ||
      payForm.current.date.value === "" ||
      payForm.current.sec.value === ""
    ) {
      alert("Please Fill All The Details");
    } else {
      alert("Order Placed!!");
      window.location.replace("index.html");
    }
  };

  return (
    <div id="container">
      <div className="maincontainer">
        <div className="main">
          <div className="details">
            <h2>Total Price $: {price}</h2>
            <h1>BILLING ADDRESS</h1>
            <p className="name">{data.name}</p>
            <p className="address">{data.address}</p>
            <p className="city">{data.city}</p>
            <p className="zip">{data.zip}</p>
            <p className="state">{data.state}</p>
            <p className="phone">{data.phone}</p>
          </div>
          <div className="credit">
            <h2>Card Details</h2>
            <form action="" id="form1" ref={payForm} onSubmit={handleSubmit}>
              <label htmlFor="">Name On Card</label>
              <input type="text" id="cname" />
              <label htmlFor="">Number</label>
              <input type="number" name="" id="cnumber" />
              <label htmlFor="">Expiration Date</label>
              <input type="date" id="date" />
              <label htmlFor="">Security Code</label>
              <input type="number" name="" id="sec" />
              <input
                type="submit"
                name="Place Order"
                id="porder"
                value="Place Order"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
