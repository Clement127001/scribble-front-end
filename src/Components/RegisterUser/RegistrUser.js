import { Form, useNavigation, useActionData } from "react-router-dom";
import loginBanner from "../../Assets/loginBanner.jpg";
import classes from "./RegisterUser.module.css";
const RegisterUser = () => {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <section className={classes.register}>
      <div className={classes.banner}>
        <img src={loginBanner} alt="register banner" />
      </div>

      <Form method="post" className={classes.form}>
        <h2>Register User</h2>

        <ul>
          {data &&
            data.errors &&
            Object.values(data.errors).map((err) => <li key={err}>{err}</li>)}
        </ul>
        <div>
          <label htmlFor="name">User Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Enter the name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter the email"
            required
          />
        </div>
        <div>
          <label htmlFor="profile">Profile</label>
          <input
            id="profile"
            name="profile"
            type="text"
            placeholder="Enter the profile url"
            required
          />
        </div>

        <div>
          <label htmlFor="role">Role</label>
          <input
            id="role"
            name="role"
            type="text"
            placeholder="Enter your role"
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            name="description"
            placeholder="Enter the description"
            required
          />
        </div>

        <div>
          <label htmlFor="github">Github URL</label>
          <input
            id="github"
            name="github"
            type="text"
            placeholder="Enter the github url"
            required
          />
        </div>

        <div>
          <label htmlFor="linkedin">LinkedIn URL</label>
          <input
            id="linkedin"
            name="linkedin"
            type="text"
            placeholder="Enter the linkedin url"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter the password"
            required
          />
        </div>

        <button
          className="button-primary"
          disabled={isSubmitting ? true : false}
        >
          {isSubmitting ? "sumbmitting" : "Create User"}
        </button>
      </Form>
    </section>
  );
};
export default RegisterUser;
