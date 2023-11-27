import { json, redirect } from "react-router-dom";
import RegisterUser from "../Components/RegisterUser/RegistrUser";

const RegisterUserPage = () => {
  return <RegisterUser />;
};

export default RegisterUserPage;

export const action = async ({ request }) => {
  const data = await request.formData();

  const userData = {
    name: data.get("name"),
    email: data.get("email"),
    profile: data.get("profile"),
    role: data.get("role"),
    description: data.get("description"),
    githubUrl: data.get("github"),
    linkedinUrl: data.get("linkedin"),
    password: data.get("password"),
  };

  console.log(userData);

  const response = await fetch("http://localhost:8000/api/v1/user/register", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    console.log(response.msg);
    throw json({ status: 401 }, { message: "Can't able to register user" });
  } else {
    const user = await response.json();
    console.log(user);
  }

  return redirect("/projects");
};
