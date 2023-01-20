import React, { useState,useEffect } from "react";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Product 1", price: 10, quantity: 2 },
    { id: 2, name: "Product 2", price: 20, quantity: 3 },
    { id: 3, name: "Product 3", price: 30, quantity: 1 },
  ]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const calculateTotal = () => {
    const total = cart.reduce((acc, item) => {
      setTotalProducts(acc.totalProducts + item.quantity);
      return {
        totalPrice: acc.totalPrice + item.quantity * item.price,
        totalProducts: acc.totalProducts + item.quantity,
      };
    }, { totalPrice: 0, totalProducts: 0 });
    setTotalPrice(total.totalPrice);
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const handleQuantityChange = (id, e) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: e.target.value };
      }
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <table>
        <thead>
          <tr>
          <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e)}
                />
              </td>
              <td>${item.price}</td>
              <td>${item.quantity * item.price}</td>
              <td>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-summary">
        <div>Total Products: {totalProducts}</div>
        <div>Total Price: ${totalPrice}</div>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
