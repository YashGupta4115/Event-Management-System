import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
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
