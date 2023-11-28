import { NavLink } from "react-router-dom";
import classes from "./ProjectPreview.module.css";

const ProjectPreview = ({ proj }) => {
  console.log(proj);
  return (
    <section className={classes.project}>
      <NavLink to={`${proj._id}`}>
        <img
          src={proj.images[0].imageUrl}
          alt={proj.name}
          className={classes["proj-image"]}
        />
      </NavLink>
    </section>
  );
};

export default ProjectPreview;
