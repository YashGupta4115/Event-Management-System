import React, { useState } from "react";
import "./CheckOutPage.css"; // General styles
import Navbar from "../Navbar/Navbar"; // Import the Navbar component
import { useNavigate } from "react-router-dom";
// import events from "../../User/App2"

const CheckOutPage = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    { id: 1, description: "Design 1", price: "$100" },
    // { id: 2, description: "Item 2", price: "₹XXXXX" },
    // { id: 3, description: "Item 3", price: "₹XXXXX" },
  ]);

  const handleRemove = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleAdd = () => {
    navigate("/booking-types");
    // const newItem = {
    //   id: items.length + 1,
    //   description: `Item ${items.length + 1}`,
    //   price: "₹1000",
    // };
    // setItems([...items, newItem]);
  };
  const handleAdd1 = () => {
    navigate("/pop-up1");
    // const newItem = {
    //   id: items.length + 1,
    //   description: `Item ${items.length + 1}`,
    //   price: "₹1000",
    // };
    // setItems([...items, newItem]);
  };
  const calculateTotal = () => {
    return items.length * 100; // Example: assume each item costs ₹1000
  };

  return (
    <div className="container">
      {/* <Navbar /> */}
      <div className="main">
        <div className="items">
          {items.map((item) => (
            <div key={item.id} className="item">
              <div className="picture">Picture</div>
              <div className="description">{item.description}</div>
              <div className="price">{item.price}</div>
              <button className="remove" onClick={() => handleRemove(item.id)}>
                X
              </button>
            </div>
          ))}
          <button className="add-more" onClick={handleAdd}>
            Add More
          </button>
        </div>
        <div className="price-details">
          <h3>Price Details</h3>
          <p>
            {/* Price ({items.length} Items): ₹{calculateTotal()} */}
            Price ({items.length} Items): ${calculateTotal()}
          </p>
          <p>
            <b>Amount Payable: ${calculateTotal()}</b>
          </p>
          <button className="book-button" onClick={handleAdd1}>Book</button>
        </div>
      </div>
      <footer>
        <p>© 2024 PLANORA Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CheckOutPage;
