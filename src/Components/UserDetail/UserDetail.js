import { NavLink } from "react-router-dom";
import classes from "./UserDetail.module.css";

import userBanner from "../../Assets/cover.png";

const UserDetail = ({ userDetails }) => {
  const { user: userDetail } = userDetails;

  const { user, projects } = userDetail;

  console.log(projects);

  return (
    <section className={classes.user}>
      <div className={classes["user-detail"]}>
        <div className={classes["user-info"]}>
          <NavLink to="#">
            <img src={user.profile} alt="user profile" />
          </NavLink>
          <h2>{user.name}</h2>
          <h3 className={classes.subtitle}>{user.description}</h3>
          <NavLink to="#">
            <button className="button-primary">Hire Me!</button>
          </NavLink>
        </div>
        <div className={classes["user-banner"]}>
          <img src={userBanner} alt="user banner" />
        </div>
      </div>

      <div className={classes["more-projects"]}>
        <h3 className={classes.subtitle}>More Projects</h3>

        <ul className={classes["projects-list"]}>
          {projects.map((project, index) => (
            <li key={`Project ${index}`}>
              <NavLink to={`/projects/${project.projectId}`}>
                <img
                  src={project.images[0].imageUrl}
                  className={classes["project-iamge"]}
                />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UserDetail;
