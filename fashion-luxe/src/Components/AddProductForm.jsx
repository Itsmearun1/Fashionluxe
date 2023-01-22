import React, { useState, useEffect } from "react";
export function AddProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct({ name, price, description, img1, img2, color });
    setName("");
    setPrice("");
    setDescription("");
    setImg1("");
    setImg2("");
    setColor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <label>
        Image 1:
        <input
          type="text"
          value={img1}
          onChange={(e) => setImg1(e.target.value)}
        />
      </label>
      <br />
      <label>
        Image 2:
        <input
          type="text"
          value={img2}
          onChange={(e) => setImg2(e.target.value)}
        />
      </label>
      <br />
      <label>
        Color:
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Product</button>
    </form>
  );
}
