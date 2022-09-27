import React from "react";
import { Link } from "react-router-dom";
import Profile from "../../assets/profile.JPG";
import "./sidebar.css";

const SideBar = () => {
  return (
    <div className=" sidebar">
      <img className="profile-img" src={Profile} alt="profile" />
      <ul className="nav-list">
        <li className="nav-items">
          <Link to="/"><i className="uil uil-estate nav-icon"></i> Home</Link>
        </li>
        <li className="nav-items">
          <Link to="/skills"><i className="uil uil-award nav-icon"></i> Skills</Link>
        </li>
        <li className="nav-items">
          <Link to="/education"><i className="uil uil-book-open nav-icon"></i> Education</Link>
        </li>
        <li className="nav-items">
          <Link to="/projects"><i className="uil uil-desktop nav-icon"></i> Projects</Link>
        </li>
        <li className="nav-items">
          <Link to="/contact-us"><i className="uil uil-desktop nav-icon"></i> Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
