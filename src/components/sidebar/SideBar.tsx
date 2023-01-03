import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../../assets/icons/HomeIcon";
import "./sidebar.scss";
import { IoChevronDownOutline } from "react-icons/io5";
import BriefCaseIcon from "../../assets/icons/BriefCaseIcon";
import UsersIcon from "../../assets/icons/UsersIcon";
import FriendlyIcon from "../../assets/icons/FriendlyIcon";
import SackIcon from "../../assets/icons/SackIcon";
import HandShakeIcon from "../../assets/icons/HandShakeIcon";
import PiggyIcon from "../../assets/icons/PiggyIcon";
import RecieveIcon from "../../assets/icons/RecieveIcon";
import UserCheckIcon from "../../assets/icons/UserCheckIcon";
import UserTimesIcon from "../../assets/icons/UserTimesIcon";
import BankIcon from "../../assets/icons/BankIcon";
import CoinIcon from "../../assets/icons/CoinIcon";
import ShareIcon from "../../assets/icons/ShareIcon";
import GallaxyIcon from "../../assets/icons/GallaxyIcon";
import UserSettingsIcon from "../../assets/icons/UserSettingsIcon";
import ScrollIcon from "../../assets/icons/ScrollIcon";
import ChatBar from "../../assets/icons/ChatBar";
import SliderIcon from "../../assets/icons/SliderIcon";
import BargeIcon from "../../assets/icons/BargeIcon";
import ClipBoardIcon from "../../assets/icons/ClipBoardIcon";
import TyreIcon from "../../assets/icons/TyreIcon";
import Logout from "../../assets/icons/Logout";

const SideBar = () => {
  return (
    <div className="sidebar ">
      <div className="center">
        <ul>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <BriefCaseIcon className="icon" />
              <span>Switch Organization</span>
              <IoChevronDownOutline />
            </li>
          </Link>
          <li className="span">
            <HomeIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">CUSTOMERS</p>
          <Link to="/dashboard/user" style={{ textDecoration: "none" }}>
            <li>
              <UsersIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          {/* <p className="title">LISTS</p> */}
          <li>
            <FriendlyIcon className="icon" />
            <span>Guarantors</span>
          </li>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <SackIcon className="icon" />
              <span>Loans</span>
            </li>
          </Link>
          <li>
            <HandShakeIcon className="icon" />
            <span>Decision Models</span>
          </li>
          <li>
            <PiggyIcon className="icon" />
            <span>Savings</span>
          </li>
          {/* <p className="title">USEFUL</p> */}
          <li>
            <RecieveIcon className="icon" />
            <span> Loan Requests</span>
          </li>
          <li>
            <UserCheckIcon className="icon" />
            <span>Whitelist</span>
          </li>
          <li>
            <UserTimesIcon className="icon" />
            <span>Karma</span>
          </li>
          <p className="title">BUSINESSES</p>
          <li>
            <BriefCaseIcon className="icon" />
            <span>Organization</span>
          </li>
          <li>
            <RecieveIcon className="icon" />
            <span> Loan Products</span>
          </li>
          {/* <p className="title">USER</p> */}
          <li>
            <BankIcon className="icon" />
            <span>Savings Products</span>
          </li>
          <li>
            <CoinIcon className="icon" />
            <span>Fees and Charges</span>
          </li>
          <li>
            <ShareIcon className="icon" />
            <span> Transactions</span>
          </li>
          <li>
            <GallaxyIcon className="icon" />
            <span> Services</span>
          </li>
          <li>
            <UserSettingsIcon className="icon" />
            <span>Service Account</span>
          </li>
          <li>
            <ScrollIcon className="icon" />
            <span>Settlements</span>
          </li>
          <li>
            <ChatBar className="icon" />
            <span>Reports</span>
          </li>
          <p className="title">SETTINGS</p>
          <li>
            <SliderIcon className="icon" />
            <span>Preferences</span>
          </li>
          <li>
            <BargeIcon className="icon" />
            <span>Fees and Pricing</span>
          </li>
          <li>
            <ClipBoardIcon className="icon" />
            <span>Audit Logs</span>
          </li>
          <li>
            <ChatBar className="icon" />
            <span>Reports</span>
          </li>
          <li>
            <TyreIcon className="icon" />
            <span>Systems Messages</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <hr />
        <ul>
          <li>
            <Logout className="icon" />
            <span>Logout</span>
          </li>
        </ul>
        <p>v1.2.0</p>
      </div>
    </div>
  );
};

export default SideBar;
