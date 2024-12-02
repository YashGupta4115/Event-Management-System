import React from "react";
import "./App3.css";
import { useNavigate } from "react-router-dom";
import { eventDesigns } from "../Assests/data";

const App3 = () => {
  const data = eventDesigns;
  const navigate = useNavigate();
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <h1>PLANORA</h1>
          <p>Plan and Celebrate</p>
        </div>
      </header>

      <div className="search-section">
        <input
          type="text"
          placeholder="Jamshedpur, Jharkhand, India"
          className="search-bar"
        />
        <button className="search-button">Explore</button>
      </div>

      <div className="background-app3">
        <h2 className="subtitle">Book Your Event Effortlessly</h2>
      </div>

      <div className="grid-layout-app3">
        {
          data.map((item, index) => (
            <div key={index} className="card" onClick={() => navigate(`/check-out`)}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App3;  // Ensure this line is present
