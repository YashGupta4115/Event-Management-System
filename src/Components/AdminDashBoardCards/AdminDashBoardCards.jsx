import React from "react";
import "./AdminDashBoardCards.css";
import AdminCard1 from "./adminCard1/AdminCard1";
import AdminCard2 from "./adminCard2/AdminCard2";

const AdminDashBoardCards = () => {
  return (
    <div className="adminDashBoard-cards">
      <AdminCard1 />
      <AdminCard2 />
    </div>
  );
};

export default AdminDashBoardCards;
