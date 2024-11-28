import React from "react";
import { adminDashBoardCards2 } from "../../../Assests/data";
import "./AdminCard2.css";

const AdminCard2 = () => {
  return (
    <div className="adminDashBoard-cards2">
      {adminDashBoardCards2.map((item, index) => {
        return (
          <div key={index} className="adminDashBoard-cards2-container">
            <div>{item.title}</div>
            <div className="card-content">{item.component}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminCard2;
