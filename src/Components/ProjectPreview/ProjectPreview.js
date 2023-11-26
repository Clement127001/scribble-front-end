import { NavLink } from "react-router-dom";
import classes from "./ProjectPreview.module.css";

const ProjectPreview = ({ proj, user }) => {
  return (
    <section className={classes.project}>
      <NavLink to={`${proj._id}`}>
        <img
          src={proj.images[0].imageUrl}
          alt={proj.name}
          className={classes["proj-image"]}
        />
      </NavLink>
      <div className={classes["user-detail"]}>
        <NavLink to={`/user/${user._id}`}>
          <img src={user.profile} alt={user.name} />
        </NavLink>
        <h3>{user.name}</h3>
      </div>
    </section>
  );
};

export default ProjectPreview;
