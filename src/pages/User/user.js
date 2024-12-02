import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">PLANORA</h1>
        <nav className="nav">
          <a href="#">My Account</a>
          <a href="#">Contact Us</a>
          <a href="#">Login/Register</a>
        </nav>
      </header>

      <div className="search-section">
        <img
          src="https://via.placeholder.com/1500x400" // Replace with actual image URL
          alt="Banner"
          className="banner-image"
        />
        <div className="search-bar">
          <input
            type="text"
            placeholder="Jamshedpur, Jharkhand, India"
            className="location-input"
          />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      </div>

      <main className="main-content">
        <div className="card">Events & Descriptions</div>
        <div className="card">Venue & Designs</div>
        <div className="card">Services & Description</div>
      </main>

      <footer className="footer">
        <p>&copy; 2024 PLANORA Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;