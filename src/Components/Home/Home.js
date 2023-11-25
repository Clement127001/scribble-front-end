import React from "react";
import classes from "./Home.module.css";

import people from "../../Assets/people.png";
import homeProj from "../../Assets/home-info.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes["home-info"]}>
        <h1 className={classes["home-header"]}>
          Work with the world
          <br />
          <span> of creative</span>
          <br />
          people
        </h1>
        <p className={classes.subtext}>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className={classes.action}>
          <img src={people} alt="people" />
          <NavLink to="/projects">
            <button className="button-primary">Explore Projects</button>
          </NavLink>
        </div>
      </div>

      <div className={classes["landing-image"]}>
        <img src={homeProj} alt="project landing" />
      </div>
    </div>
  );
};

export default Home;
