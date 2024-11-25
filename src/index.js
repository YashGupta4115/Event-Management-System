import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginPage from '../src/Components/signIn/LoginPage';
import reportWebVitals from './reportWebVitals';
import AdminDashboard from './Routes/AdminDashboard/AdminDashboard';
import { ScreenContextProvider } from './Contexts/screenContext';
import CreateAccountPage from './Components/signIn/createAccountPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ScreenContextProvider>
    <AdminDashboard/>
    {/* // <LoginPage/> */}
    {/* <CreateAccountPage/> */}
  </ScreenContextProvider>
);
reportWebVitals();
