import React, { useState } from "react";
import "./Navbar.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { admindropDownData } from "../../Assests/data";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMyAccountOpen, setIsMyAccountOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleAccountOpen = () => {
    setIsMyAccountOpen(!isMyAccountOpen);
  };

  return (
    <>
      <div className="navbar-container">
        <div className="left-navbar">
          <div className="navbar-home-ele navbar-indi-element">Home</div>
          {!isSearchOpen ? (
            <div
              className="navbar-search-close-ele navbar-indi-element"
              onClick={toggleSearch}
            >
              <CiSearch style={{ fontSize: "18px" }} />
            </div>
          ) : (
            <div className="navbar-search-open-ele navbar-indi-element">
              <input type="text" />
              <div
                style={{
                  marginLeft: "10px",
                }}
                onClick={toggleSearch}
              >
                <CiSearch style={{ fontSize: "18px" }} />
              </div>
            </div>
          )}
        </div>
        <div className="mid-navbar">
          <div className="navbar-logo-ele navbar-indi-element">Logo</div>
        </div>
        <div className="right-navbar">
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

export default Navbar;
