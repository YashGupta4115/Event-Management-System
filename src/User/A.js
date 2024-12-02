import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <h1>PLANORA</h1>
          <p>Plan and Celebrate</p>
        </div>
        <div className="header-links">
          <a href="#account">My Account</a>
          <a href="#contact">Contact Us</a>
          <a href="#login">Login/Register</a>
        </div>
      </header>

      {/* Main Search Section */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Jamshedpur, Jharkhand, India"
          className="search-bar"
        />
        <button className="search-button">Search</button>
      </div>

      {/* Background Image and Content */}
      <div className="background">
        <div className="overlay">
          <h2 className="subtitle">Explore Venues & Services</h2>
        </div>
      </div>

      {/* Content Sections */}
      <div className="content-sections">
        <div className="card">
          <h3>Events & Descriptions</h3>
        </div>
        <div className="card">
          <h3>Venue & Designs</h3>
        </div>
        <div className="card">
          <h3>Services & Description</h3>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 PLANORA Inc. All rights reserved.</p>
        <div className="social-icons">
          <a href="#facebook">F</a>
          <a href="#twitter">T</a>
        </div>
      </footer>
    </div>
  );
}

export default App;