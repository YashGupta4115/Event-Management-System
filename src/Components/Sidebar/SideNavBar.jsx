import React, { useContext, useState } from "react";
import "../Navbar/Navbar.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { admindropDownData } from "../../Assests/data";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { screenContext } from "../../Contexts/screenContext";
import { IoMdClose } from "react-icons/io";

const SideNavBar = () => {
  const [isMyAccountOpen, setIsMyAccountOpen] = useState(false);
  const { toggleNav } = useContext(screenContext);

  const toggleAccountOpen = () => {
    setIsMyAccountOpen(!isMyAccountOpen);
  };
  return (
    <>
      <div className="navbar-container">
        <div className="top-navbar">
          <div
            className="navbar-home-ele navbar-indi-element"
            onClick={toggleNav}
          >
            <IoMdClose />
          </div>
          <div className="navbar-logo-ele navbar-indi-element">Logo</div>
        </div>
        <div className="middle-navbar">
          <div
            className="navbar-myact-ele navbar-indi-element"
            onClick={toggleAccountOpen}
          >
            My Account{" "}
            {isMyAccountOpen ? (
              <IoIosArrowDown style={{ marginLeft: "10px" }} />
            ) : (
              <IoIosArrowUp style={{ marginLeft: "10px" }} />
            )}
            {isMyAccountOpen ? (
              <div className="dropdown-menu-navbar">
                <DropdownMenu data={admindropDownData} />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="navbar-contact-ele navbar-indi-element">
            Contact Us
          </div>
          <div className="navbar-login-ele navbar-indi-element">
            Login/Register
          </div>
          <div className="navbar-notify-ele navbar-indi-element">
            <IoIosNotifications style={{ fontSize: "20px" }} />
            <span className="notify-count">3</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavBar;
