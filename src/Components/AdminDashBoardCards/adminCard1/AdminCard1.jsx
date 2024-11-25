import React from "react";
import { adminDashBoardCards } from "../../../Assests/data";
import { CiMenuKebab } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import "./AdminCard1.css";

const AdminCard1 = () => {
  return (
    <div className="adminDashBoard-cards1">
      {adminDashBoardCards.map((items, index) => {
        let color = items.bgColor;
        let textBgColor = items.textBg;
        let textColor = color === "#FFFFFF" ? "black" : "white";

        console.log(color, textColor, textBgColor);

        return (
          <div
            key={index}
            className="adminDashboard-cards-container"
            style={{ background: color, color: textColor }}
          >
            <div className="adminDashBoard-cards-top">
              <div style={{ fontWeight: "500" }}>{items.title}</div>
              <div style={{ cursor: "pointer" }}>
                <CiMenuKebab />
              </div>
            </div>
            <div className="adminDashBoard-cards-bottom">
              <div className="view-all-container" style={{ cursor: "pointer" }}>
                <IoAddCircleOutline />
              </div>
              <div
                className="view-all-container"
                style={{ background: textBgColor }}
              >
                <div style={{ padding: "5px 15px 6px 15px", fontSize: "12px" }}>
                  View all
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminCard1;
