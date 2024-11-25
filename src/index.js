import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AdminDashboard from './Routes/AdminDashboard/AdminDashboard';
import { ScreenContextProvider } from './Contexts/screenContext';
import CreateAccountPage from './Components/signIn/createAccount';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ScreenContextProvider>
    {/* <AdminDashboard/> */}
    <CreateAccountPage/>
  </ScreenContextProvider>
);
reportWebVitals();
