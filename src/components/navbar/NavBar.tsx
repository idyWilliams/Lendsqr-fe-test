import React from "react";
import "../navbar/NavBar.scss";
import NotificationIcon from "../../assets/icons/NotificationIcon";
import Logo from "../../assets/logo/Logo";
import img from "../../assets/images/img.jpeg";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="nav">
          <div className="topLeft">
            <span className="logo">
              <Logo height="35px" width="115.37px" />
            </span>
          </div>
          <div className="search_wrapper">
            <div className="search">
              <input type="search" placeholder="Search for anything" />
            </div>
            <div className="search_icon">
              <IoSearchSharp size={17} />
            </div>
          </div>
        </div>

        <div className="topRight">
          <Link to={"#"} className="docs">
            Docs
          </Link>
          <div className="topbarIconContainer">
            <NotificationIcon width="19.67px" height="22.74px" />
          </div>

          <img src={img} alt="" className="topAvatar" />
          <div className="name">
            <p className="text">Williams</p>
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
