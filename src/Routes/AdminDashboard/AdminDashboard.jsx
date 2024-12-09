import React from "react";
import AdminDashBoardCards from "../../Components/AdminDashBoardCards/AdminDashBoardCards";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <>
      <div className="AdminDashboard-contianer">
        {/* {width <= 768 ? <NavBarSmall /> : <Navbar />} */}
        <div className="AdminDashboard-mid-contianer">
          <AdminDashBoardCards />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
