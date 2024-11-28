/*import logo from './logo.svg';
import './App.css';



function App() {
  return (
    
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
  
export default App;*/



import React, { useState } from "react";
import './App.css';
import App1 from "./User/App1";
import App2 from "./User/App2";
import App3 from "./User/App3"; // Import App3

function App() {
  const [activeApp, setActiveApp] = useState(1);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <button onClick={() => setActiveApp(1)}>Explorer</button>
        <button onClick={() => setActiveApp(2)}>View Design 2</button>
        <button onClick={() => setActiveApp(3)}>View Design 3</button>
      </nav>

      {/* Conditional Rendering */}
      {activeApp === 1 && <App1 />}
      {activeApp === 2 && <App2 />}
      {activeApp === 3 && <App3 />}
    </>
  );
}

export default App;

