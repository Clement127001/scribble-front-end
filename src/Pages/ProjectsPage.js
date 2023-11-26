import { Suspense } from "react";
import { defer, useLoaderData, json, Await } from "react-router-dom";

import loading from "../Assets/loading-spinner.gif";
import ProjectList from "../Components/ProjectsList/ProjectList";

const ProjectsPage = () => {
  const { projects } = useLoaderData();

  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
        >
          <img src={loading} alt="loading..." />
        </div>
      }
    >
      <Await resolve={projects}>
        {(loadedProjects) => <ProjectList projects={loadedProjects} />}
      </Await>
    </Suspense>
  );
};

export default ProjectsPage;

const projectsLoader = async () => {
  const response = await fetch("http://localhost:8000/api/v1/project/");

  if (response.status === 404)
    throw json({ status: 404 }, { message: "Page not found" });
  else if (!response.ok || response.status === 500)
    throw json({ status: 500 }, { message: "could not able to fetch data" });
  else {
    const projects = await response.json();
    return projects;
  }
};

export const loader = async () => {
  return defer({
    projects: projectsLoader(),
  });
};
