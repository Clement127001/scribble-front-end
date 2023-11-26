import { useRouteError } from "react-router-dom";
import sww from "../Assets/Error/something-went-wrong.jpg";
import serverError from "../Assets/Error/server-error.jpg";
import err404 from "../Assets/Error/error.jpg";
import ErrorComponent from "../Components/Error/Error";
const ErrorPage = () => {
  const error = useRouteError();

  let message = "Something went wrong";
  let image = sww;

  console.log(error);

  if (error.status === 404) {
    message = "Page not found";
    image = err404;
  }

  if (error.status === 500 || error.message === "Failed to fetch") {
    message = "Internal server error";
    image = serverError;
  }

  return <ErrorComponent message={message} img={image} />;
};

export default ErrorPage;
