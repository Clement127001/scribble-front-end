import Home from "./Components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./Pages/RootLayout";
import ProjectRoot from "./Pages/ProjectRoot";

import UserDetailPage, {
  loader as userDetailLoader,
} from "./Pages/UserDetailPage";
import ProjectsPage, { loader as projectsLoader } from "./Pages/ProjectsPage";
import ProjectDetailPage, {
  loader as projectDetailLoader,
} from "./Pages/ProjectDetailPage";
import ErrorPage from "./Pages/ErrorPage";
import RegisterUserPage, {
  action as registerAction,
} from "./Pages/RegisterUserPage";

import { userLoader, checkAuthLoader } from "./Util/auth";
import UserLoginPage from "./Pages/UserLoginPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      id: "root",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      loader: userLoader,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "projects",
          element: <ProjectRoot />,
          children: [
            {
              index: true,
              element: <ProjectsPage />,
              loader: projectsLoader,
            },
            {
              path: ":projectId",
              element: <ProjectRoot />,
              children: [
                {
                  index: true,
                  element: <ProjectDetailPage />,
                  loader: projectDetailLoader,
                },
                {
                  path: "edit",
                  element: <h1>Edit project detail page</h1>,
                  loader: checkAuthLoader,
                },
              ],
            },
            {
              path: "new",
              element: <h1>create new project page</h1>,
              loader: checkAuthLoader,
            },
          ],
        },
        {
          path: "user",
          children: [
            {
              path: "login",
              element: <UserLoginPage />,
            },
            {
              path: "register",
              element: <RegisterUserPage />,
              action: registerAction,
            },
            {
              path: ":id",
              element: <UserDetailPage />,
              loader: userDetailLoader,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
