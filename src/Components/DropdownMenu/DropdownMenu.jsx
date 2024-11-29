import React from "react";
import "./DropDownMenu.css";
import { useNavigate } from "react-router-dom";

const DropdownMenu = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="dropdown-menu-container">
      {data.map((item, index) => {
        return (
          <div key={index} className="dropDownMenu-indi-ele">
            <span onClick={() => navigate(`/${item.route}`)}>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DropdownMenu;
