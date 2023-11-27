import { Suspense } from "react";
import { NavLink, Await, json, useLoaderData, defer } from "react-router-dom";
import UserDetail from "../Components/UserDetail/UserDetail";

import loading from "../Assets/loading-spinner.gif";

const UserDetailPage = () => {
  const user = useLoaderData();

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
      <Await resolve={user}>
        {(loadedUser) => <UserDetail userDetails={loadedUser} />}
      </Await>
    </Suspense>
  );
};

export default UserDetailPage;

const userLoader = async (id) => {
  const response = await fetch("http://localhost:8000/api/v1/user/" + id);

  if (response.status === 404)
    throw json({ status: 404 }, { message: "Page not found" });
  else if (!response.ok)
    throw json({ status: 500 }, { message: "Internal server error" });
  else {
    const user = await response.json();
    return user;
  }
};

export const loader = async ({ params }) => {
  const id = params.id;

  return defer({
    user: await userLoader(id),
  });
};
