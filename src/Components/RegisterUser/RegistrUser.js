import { Form, useNavigation, useActionData } from "react-router-dom";
import loginBanner from "../../Assets/loginBanner.jpg";
import classes from "./RegisterUser.module.css";
const RegisterUser = () => {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <section>
      <div>
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
          <input id="name" name="name" type="text" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div>
          <label htmlFor="profile">Profile</label>
          <input id="profile" name="text" type="profile" required />
        </div>

        <div>
          <label htmlFor="role">Role</label>
          <input id="role" name="text" type="role" />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input id="description" name="text" type="description" required />
        </div>

        <div>
          <label htmlFor="github">Email</label>
          <input id="github" name="text" type="github" required />
        </div>

        <div>
          <label htmlFor="linkeding">Email</label>
          <input id="linkeding" name="text" type="linkeding" required />
        </div>

        <div>
          <label htmlFor="password">Email</label>
          <input id="password" name="password" type="password" required />
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
