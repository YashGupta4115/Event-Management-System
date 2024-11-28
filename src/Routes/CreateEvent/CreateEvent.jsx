import React, { useState } from "react";
import "./CreateEvent.css";

const CreateEvent = () => {
  const [eventName, setEventName] = useState();
  const [eventDescription, setEventDescription] = useState();
  const [services, setServices] = useState("Full service");
  const [price, setPrice] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Created : ", {
      eventName,
      eventDescription,
      services,
      price,
    });
  };
  return (
    <div className="createEvent-container">
      <span className="title">Add New Event</span>
      <form className="createEvent-form">
        <label>Event Name : </label>
        <input
          type="text"
          onChange={(e) => setEventName(e.target.value)}
          required
        />
        <label>Event Description : </label>
        <input
          type="text"
          onChange={(e) => setEventDescription(e.target.value)}
        />
        <label>Available Services : </label>
        <select
          defaultValue="Full Service"
          onChange={(e) => setServices(e.target.value)} // Use onChange instead of onSelect
        >
          <option value="Full Service">Full Service</option>
          <option value="Customizable">Customizable</option>
        </select>

        <label>Approximate Pricing : </label>
        <input type="text" onChange={(e) => setPrice(e.target.value)} />
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
};

export default CreateEvent;
