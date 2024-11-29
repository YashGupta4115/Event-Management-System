import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import App1 from "../../User/App1";

import "./AppHome.css";
import App2 from "../../User/App2";
import App3 from "../../User/App3";
import CreateAccountPage from "../../Components/signIn/createAccount";
import LoginPage from "../../Components/signIn/LoginPage";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import CreateEvent from "../CreateEvent/CreateEvent";
import CheckOutPage from "../../Components/CheckOut/CheckOutPage";

const AppHome = () => {
  return (
    <div className="appHome-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<App1 />} />
        <Route path="/events" element={<App2 />} />
        <Route path="/booking-types" element={<App3 />} />
        <Route path="/login" element={<CreateAccountPage />} />
        <Route path="/sign-up" element={<LoginPage />} />
        <Route path="/adminDashBoard" element={<AdminDashboard />} />
        <Route path="/add-event" element={<CreateEvent />} />
        <Route path="/check-out" element={<CheckOutPage />} />
        {/* <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};

export default AppHome;
