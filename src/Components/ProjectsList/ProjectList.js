import ProjectPreview from "../ProjectPreview/ProjectPreview";
import classes from "./ProjectList.module.css";
const ProjectList = ({ projects: proj }) => {
  const { projects } = proj;
  return (
    <section className={classes["projects-list"]}>
      {/* <Filters /> */}
      <ul className={classes.projects}>
        {projects.map((project, index) => (
          <li key={"project" + index}>
            <ProjectPreview proj={project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectList;
