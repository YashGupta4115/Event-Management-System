/*import React from "react";
import "./App3.css";
import { useNavigate } from "react-router-dom";

function App3() {
  const navigate = useNavigate();
  return (
    <div className="app">
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
        <div className="card" onClick = {()=>navigate('/check-out')}>Birthday Booking</div>
        <div className="card">Descriptions</div>
        <div className="card">Birthday Booking</div>
        <div className="card">Descriptions</div>
      </div>
    </div>
  );
}

export default App3;
*/
import React from "react";
import "./App3.css";
import { useNavigate } from "react-router-dom";

function App3() {
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
        <div className="card" onClick={() => navigate('/check-out')}>Birthday Booking</div>
        <div className="card">Descriptions</div>
        <div className="card">Birthday Booking</div>
        <div className="card">Descriptions</div>
      </div>
    </div>
  );
}

export default App3;  // Ensure this line is present
