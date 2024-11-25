import React, { useContext } from "react";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { screenContext } from "../../Contexts/screenContext";
import SideNavBar from "../Sidebar/SideNavBar";

const NavBarSmall = () => {
  const { isNavOpen, toggleNav } = useContext(screenContext);
  return (
    <>
      <div className="small-navbar-container">
        {isNavOpen ? (
          <SideNavBar />
        ) : (
          <div
            style={{ margin: "10px" }}
            className="navbar-home-ele navbar-indi-element"
            onClick={toggleNav}
          >
            <RxHamburgerMenu />
          </div>
        )}
        <div className="small-navbar-logo-ele navbar-indi-element">Logo</div>
      </div>
    </>
  );
};

export default NavBarSmall;
