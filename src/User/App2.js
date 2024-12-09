import React from "react";
import "./App2.css";
import { useNavigate } from "react-router-dom";
import { sampleEvents } from "../Assests/data";

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
        {
          sampleEvents.map((event) => {
            return(
              <div className="events-card-container">
                <div className="events-card" onClick={() => navigate(`/event/${event.title}`)}>
                  <div className="event-image">
                    <img src={event.image} alt={event.title} />
                  </div>
                  <div className="event-details">
                    <h3>{event.title}</h3>
                    <p>{event.location}</p>
                    <p>{event.priceRange}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className="card">About Us</div>

      <div className="app2-content-sections-2">
        <div className="app2-section2-card">Team Image</div>
        <div className="app2-section2-card">
          Planora is an all-in-one event management platform designed to cater
          to every type of event and party. Whether you are planning a corporate
          conference, a wedding, a birthday celebration, a community festival, or
          any other type of gathering, Planora aims to simplify the entire process
          by providing a seamless user-friendly experience.
        </div>
      </div>  
    </div>
  );
}

export default App2;
