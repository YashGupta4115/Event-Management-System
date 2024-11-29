
import React from "react";
import "./App1.css";
import '../User/App3.css'
import { useNavigate } from "react-router-dom";

function App1() {
  const navigate = useNavigate();
  return (
    <div className="app">

      <div className="search-section">
        <input
          type="text"
          placeholder="Jamshedpur, Jharkhand, India"
          className="search-bar"
        />
        <button className="search-button">Search</button>
      </div>

      <div className="app1-background">
        <h2 className="subtitle">Explore Venues & Services</h2>
      </div>

      <div className="grid-layout-app3">
        <div className="card" onClick={()=>navigate('/events')}>
          <h3>Events & Descriptions</h3>
        </div>
        <div className="card">
          <h3>Venue & Designs</h3>
        </div>
        <div className="card">
          <h3>Services & Descriptions</h3>
        </div>
      </div>
    </div>
  );
}

export default App1;
