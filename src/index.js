import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AdminDashboard from './Routes/AdminDashboard/AdminDashboard';
import CreateAccountPage from './Components/signIn/createAccount';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AdminDashboard/> */}
    <CreateAccountPage/>    
  </React.StrictMode>
);
reportWebVitals();
