import React, { useContext } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { screenContext } from "../../Contexts/screenContext";
import NavBarSmall from "../../Components/Navbar/NavBarSmall";
import AdminDashBoardCards from "../../Components/AdminDashBoardCards/AdminDashBoardCards";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const { width } = useContext(screenContext);

  return (
    <>
      <div
        className="AdminDashboard-contianer"
        style={{
          backgroundSize: "cover", // Ensures the image covers the entire background
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
          backgroundPosition: "center", // Centers the image
        }}
      >
        {width <= 768 ? <NavBarSmall /> : <Navbar />}
        <div className="AdminDashboard-mid-contianer">
          <AdminDashBoardCards />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
