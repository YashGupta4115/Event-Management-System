import React from "react";
import "./App3.css";

function App3() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <h1>PLANORA</h1>
          <p>Plan Your Dream Event</p>
        </div>
        <div className="header-links">
          <a href="#account">My Account</a>
          <a href="#contact">Contact Us</a>
          <a href="#login">Login/Register</a>
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

      <div className="background">
        <h2 className="subtitle">Book Your Event Effortlessly</h2>
      </div>

      <div className="grid-layout">
        <div className="card">Birthday Booking</div>
        <div className="card">Descriptions</div>
        <div className="card">Birthday Booking</div>
        <div className="card">Descriptions</div>
      </div>

      <footer className="footer">
        <p>© 2024 PLANORA Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App3;
