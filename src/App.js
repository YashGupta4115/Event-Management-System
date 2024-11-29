
import React, { useState } from "react";
import './App.css';
import App1 from "./User/App1";
import App2 from "./User/App2";
import App3 from "./User/App3";

function App() {
  const [activeApp, setActiveApp] = useState(1);

  const handleAppChange = (appNumber) => {
    setActiveApp(appNumber);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <button onClick={() => handleAppChange(1)}>Explorer</button>
        <button onClick={() => handleAppChange(2)}>View Design 2</button>
        <button onClick={() => handleAppChange(3)}>View Design 3</button>
      </nav>

      {/* Conditional Rendering */}
      {activeApp === 1 && <App1 />}
      {activeApp === 2 && <App2 />}
      {activeApp === 3 && <App3 />}
    </>
  );
}

export default App;


