import { redirect } from "react-router-dom";

const getUser = () => {
  const token = localStorage.getItem("token");
  const profile = localStorage.getItem("profile");
  const id = localStorage.getItem("user-id");

  const user = { token, profile, id };

  if (!token) return null;

  return user;
};

export const userLoader = () => {
  return getUser();
};

export const checkAuthLoader = () => {
  const user = getUser();

  if (!user) {
    return redirect("/user/login");
  }

  return null;
};
