import { createContext, useState } from "react";

export const dataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [eventList, setEventList] = useState([]);

  // Function to add a new event
  const addNewEvent = (newEvent) => {
    setEventList((prevList) => [...prevList, newEvent]);
  };

  // Function to remove an event by index
  const removeEvent = (index) => {
    setEventList((prevList) => prevList.filter((_, i) => i !== index));
  };

  // Context value as an object for better readability
  const value = {
    eventList,
    addNewEvent,
    removeEvent,
  };

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};
