import React from "react";
import "./App2.css";
import { useNavigate } from "react-router-dom";

function App2() {
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

      <div className="app2-content-sections">
        <div className="card" onClick={()=>navigate('/booking-types')}>Samples</div>
        <div className="card">Samples</div>
        <div className="card">Samples</div>
      </div>
      <div className="card">About Us</div>
      <div className="app2-content-sections">
        <div className="card">Team Image</div>
        <div className="card">
          Planora is an all-in-one event management platform designed to cater
          to every type of event and party..Whether you are planning a corporate conference,a wedding,a birthdaycelebration,a community festival,or any other type of gatherings.Planora aims to simplify the entire process by providing a seamless user-friendly experience. 
        </div>
      </div>  
    </div>
  );
}

export default App2;
