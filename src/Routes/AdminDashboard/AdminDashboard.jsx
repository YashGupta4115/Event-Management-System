import React, { useContext } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { screenContext } from "../../Contexts/screenContext";
import NavBarSmall from "../../Components/Navbar/NavBarSmall";

const AdminDashboard = () => {
  const { width } = useContext(screenContext);

  return (
    <div className="AdminDashboard-contianer">
      {width <= 768 ? <NavBarSmall /> : <Navbar />}
    </div>
  );
};

export default AdminDashboard;
