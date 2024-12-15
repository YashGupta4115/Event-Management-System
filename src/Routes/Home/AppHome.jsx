import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import App1 from "../../User/App1";

import "./AppHome.css";
import App2 from "../../User/App2";
import App3 from "../../User/App3";
import CreateAccountPage from "../../Components/signIn/createAccount";
import LoginPage from "../../Components/signIn/LoginPage";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import CheckOutPage from "../../Components/CheckOut/CheckOutPage";
import CreateEvent from "../AdminRoutes/CreateEvent/CreateEvent";
import Forgetpass from "../../Components/signIn/Forgetpass";
import Resetpass from "../../Components/signIn/Resetpass";
import Popup from "../../Components/signIn/Popup";
import NavBarSmall from "../../Components/Navbar/NavBarSmall";
import { screenContext } from "../../Contexts/screenContext";

const AppHome = () => {
  const location = useLocation();
  const { width } = useContext(screenContext);

  // List of paths where the Navbar should not appear
  const hideNavbarPaths = [
    "/login",
    "/sign-up",
    "/pop-up",
    "/reset-pass",
    "/forget-pass",
  ];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <div className="appHome-container">
      {!hideNavbarPaths.includes(location.pathname) ? (
        width < "768" ? (
          <NavBarSmall />
        ) : (
          <Navbar />
        )
      ) : (
        ""
      )}

      <Routes>
        <Route path="/" element={<App1 />} />
        <Route path="/events" element={<App2 />} />
        <Route path="/booking-types" element={<App3 />} />
        <Route path="/sign-up" element={<CreateAccountPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adminDashBoard" element={<AdminDashboard />} />
        <Route path="/add-event" element={<CreateEvent />} />
        <Route path="/check-out" element={<CheckOutPage />} />
        <Route path="/forget-pass" element={<Forgetpass />} />
        <Route path="/reset-pass" element={<Resetpass />} />
        <Route path="/pop-up" element={<Popup />} />
      </Routes>
    </div>
  );
};

export default AppHome;
