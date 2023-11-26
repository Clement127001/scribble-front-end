import { Suspense } from "react";
import { defer, json, useLoaderData, Await } from "react-router-dom";
import ProjectDetails from "../Components/ProjectDetail/ProjectDetail";

import loading from "../Assets/loading-spinner.gif";

const ProjectDetailPage = () => {
  const projectDetail = useLoaderData();
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
      <Await resolve={projectDetail}>
        {(loadedProjectDetail) => (
          <ProjectDetails detail={loadedProjectDetail} />
        )}
      </Await>
    </Suspense>
  );
};

export default ProjectDetailPage;

const projectDetailLoader = async (id) => {
  const response = await fetch("http://localhost:8000/api/v1/project/" + id);

  if (response.status === 404)
    throw json({ status: 404 }, { message: "Page not found" });
  else if (!response.ok) {
    throw json(
      { status: 500 },
      { message: `cannot able to fetch details of project with id : ${id}` }
    );
  } else {
    const projectDetail = await response.json();
    return projectDetail;
  }
};

export const loader = async ({ params }) => {
  const id = params.projectId;

  return defer({
    projectDetail: await projectDetailLoader(id),
  });
};
