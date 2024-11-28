import React from "react";
import "./App2.css";

function App2() {
  return (
    <div className="app">
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

      <div className="search-section">
        <input
          type="text"
          placeholder="Jamshedpur, Jharkhand, India"
          className="search-bar"
        />
        <button className="search-button">Explore</button>
      </div>

      <div className="content-sections">
        <div className="card">Samples</div>
        <div className="card">Samples</div>
        <div className="card">Samples</div>
        <div className="card">Team Image</div>
        <div className="card">About Us</div>
        <div className="card">
          Planora is an all-in-one event management platform designed to cater
          to every type of event and party..Whether you are planning a corporate conference,a wedding,a birthdaycelebration,a community festival,or any other type of gatherings.Planora aims to simplify the entire process by providing a seamless user-friendly experience. 
        </div>
      </div>

      <footer className="footer">
        <p>© 2024 PLANORA Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App2;
