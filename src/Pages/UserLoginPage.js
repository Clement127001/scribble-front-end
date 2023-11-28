import { json, redirect } from "react-router-dom";
import LoginUser from "../Components/LoginUser/LoginUser";

const UserLoginPage = () => {
  return <LoginUser />;
};

export default UserLoginPage;

export const action = async ({ request }) => {
  const data = await request.formData();

  const userData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  console.log("user data");

  const response = await fetch("http://localhost:8000/api/v1/user/login", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw json({ status: 404 }, { message: "can't able to login user" });
  } else {
    const data = await response.json();
    const { _id, profile } = data.user;
    const token = data.token;

    localStorage.setItem("user-id", _id);
    localStorage.setItem("token", token);
    localStorage.setItem("profile", profile);
  }

  return redirect("/projects");
};
