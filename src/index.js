import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SignIn from './Components/signIn/SignIn';
import App from './App';
import App1 from './User/App1';
import App2 from './User/App2';
import App3 from './User/App3';
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "app1",
    element:<App1/>,
  },
  {
    path: "app2",
    element:<App2/>,
  },
  {
    path: "app3",
    element:<App3/>,
  },
]);



//import reportWebVitals from './reportWebVitals';
//import SignIn from './Components/signIn/SignIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignIn/>
  </React.StrictMode>
  
);
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
