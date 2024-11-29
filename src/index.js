import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
import {
  // createBrowserRouter,
  BrowserRouter
  
} from "react-router-dom";
import AppHome from './Routes/Home/AppHome';
import { ScreenContextProvider } from './Contexts/screenContext';
import { DataContextProvider } from './Contexts/dataContext';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<App/>,
//   },
//   {
//     path: "app1",
//     element:<App1/>,
//   },
//   {
//     path: "app2",
//     element:<App2/>,
//   },
//   {
//     path: "app3",
//     element:<App3/>,
//   },
// ]);
=======
import CreateAccount from '../src/Components/signIn/createAccount';

import reportWebVitals from './reportWebVitals';
import AdminDashboard from './Routes/AdminDashboard/AdminDashboard';
import { ScreenContextProvider } from './Contexts/screenContext';
import LoginPage from '../src/Components/signIn/LoginPage';
import Resetpass from '../src/Components/signIn/Resetpass';
import Popup from './Components/signIn/Popup';
import Forgetpass from './Components/signIn/Forgetpass';
>>>>>>> aba8ef7dd2089653ec93c0045a0c8a4e98295935



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
  <React.StrictMode>
    <BrowserRouter>
    <ScreenContextProvider>
    <DataContextProvider>

      <AppHome/>
    </DataContextProvider>
      {/* <AdminDashboard/> */}
    </ScreenContextProvider>
    </BrowserRouter>
  </React.StrictMode>
  
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
=======
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
>>>>>>> aba8ef7dd2089653ec93c0045a0c8a4e98295935
