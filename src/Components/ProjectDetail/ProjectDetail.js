import { NavLink } from "react-router-dom";
import classes from "./ProjectDetail.module.css";

const ProjectDetails = ({ detail }) => {
  const { projectDetail } = detail;

  const { project, user, moreProjects } = projectDetail;

  let projects = moreProjects.filter((project) => project);

  console.log(projects);

  const moreProjectsComponent = projects.map((project, index) => (
    <li key={`other project ${index}`}>
      <NavLink to={`/projects/${project.projectId}`}>
        <img src={project.images[0].imageUrl} alt="other projects" />
      </NavLink>
    </li>
  ));

  return (
    <section className={classes.details}>
      <h1>Explore the Scrib</h1>

      {/* user details */}
      <div className={classes.user}>
        <div className={classes.profile}>
          <NavLink to={`/user/${user.userId}`}>
            <img src={user.profile} alt="user profile" />
          </NavLink>
          <div className={classes["user-info"]}>
            <h3>{user.username}</h3>
            <p>{user.role}</p>
          </div>
        </div>
        <NavLink to={`/user/${user.userId}`}>
          <button className="button-primary">Hire Me</button>
        </NavLink>
      </div>

      {/* project details */}

      <div className={classes["sub-title"]}>
        <h3>{project.name}</h3>
        <p>{project.category}</p>
      </div>
      <p className={classes.para}>{project.description}</p>

      <div className={classes["image-container"]}>
        {project.images.map((img) => (
          <img src={img.imageUrl} />
        ))}
      </div>

      {/* CTA */}
      <div className={classes.CTA}>
        <NavLink to={`/user/${user.userId}`}>
          <img src={user.profile} alt="user profile" />
        </NavLink>
        <h3>{user.username}</h3>
        <p>{user.role}</p>
        <NavLink to={`/user/${user.userId}`}>
          <button className="button-primary">Hire Me</button>
        </NavLink>
      </div>

      {/* more pojects */}
      <h3 className={classes["sub-title"]}>More by {user.username}</h3>
      <ul className={classes["more-projects"]}>{moreProjectsComponent}</ul>
    </section>
  );
};

export default ProjectDetails;
