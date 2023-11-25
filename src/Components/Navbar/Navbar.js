import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/header-logo.png";
import search from "../../Assets/Icons/search.png";
import testUser from "../../Assets/test-user.jpg";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navList}>
        <NavLink to="#">Find talents</NavLink>
        <NavLink to="#">Inspiration</NavLink>
        <NavLink to="#">Learn design</NavLink>
        <NavLink to="#">Jobs</NavLink>
      </div>

      <NavLink to="/">
        <img src={logo} alt="Scribble-logo" width={48} />
      </NavLink>

      <div className={classes.action}>
        <div className={classes.search}>
          <p>Search</p>
          <img src={search} alt="search" />
        </div>

        <NavLink to="/projects/new">
          <button className="button-primary">Share Scrib</button>
        </NavLink>

        <img src={testUser} alt="user" />
      </div>
    </nav>
  );
};

export default Navbar;
