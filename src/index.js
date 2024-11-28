import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
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
=======
import CreateAccount from '../src/Components/signIn/createAccount';

import reportWebVitals from './reportWebVitals';
import AdminDashboard from './Routes/AdminDashboard/AdminDashboard';
import { ScreenContextProvider } from './Contexts/screenContext';
// import CreateAccountPage from '../src/Components/signIn/createAccount';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ScreenContextProvider>
    {/* <AdminDashboard/> */}
    {/* // <LoginPage/> */}
    <CreateAccount/>
  </ScreenContextProvider>
);
reportWebVitals();
>>>>>>> af5c705abfa10f1b1273ccaad88418ca92093236
