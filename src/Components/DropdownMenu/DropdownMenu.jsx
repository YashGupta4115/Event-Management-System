import React from "react";
import "./DropDownMenu.css";

const DropdownMenu = ({ data }) => {
  return (
    <div className="dropdown-menu-container">
      {data.map((item, index) => {
        return (
          <div key={index} className="dropDownMenu-indi-ele">
            <span>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DropdownMenu;
