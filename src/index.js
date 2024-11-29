import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CreateAccount from '../src/Components/signIn/createAccount';

import reportWebVitals from './reportWebVitals';
import AdminDashboard from './Routes/AdminDashboard/AdminDashboard';
import { ScreenContextProvider } from './Contexts/screenContext';
import LoginPage from '../src/Components/signIn/LoginPage';
import Resetpass from '../src/Components/signIn/Resetpass';
import Popup from './Components/signIn/Popup';
import Forgetpass from './Components/signIn/Forgetpass';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ScreenContextProvider>
    {/* <AdminDashboard/> */}
     {/* {<LoginPage/>} */}
    {<CreateAccount/>}
    {/* {<Resetpass/>} */}
    {/* {<Popup/>} */}
    {/* {<Forgetpass/>} */}
  </ScreenContextProvider>
);
reportWebVitals();
