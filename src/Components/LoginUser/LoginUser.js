import { Form, useNavigation, useActionData, NavLink } from "react-router-dom";
import loginBanner from "../../Assets/loginBanner.jpg";
import classes from "./LoginUser.module.css";
const LoginUser = () => {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <section className={classes.login}>
      <div className={classes.banner}>
        <img src={loginBanner} alt="register banner" />
      </div>

      <Form method="post" className={classes.form}>
        <h2>Login</h2>

        <ul>
          {data &&
            data.errors &&
            Object.values(data.errors).map((err) => <li key={err}>{err}</li>)}
        </ul>
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
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter the password"
            required
          />
        </div>

        <p>Don't have account - register</p>

        <div className={classes.action}>
          <NavLink to="/user/register">
            <button className="button-outline-rounded">Register </button>
          </NavLink>

          <div>
            <button className="button-primary" disabled={isSubmitting}>
              {isSubmitting ? "sumbmitting" : "Login"}
            </button>
          </div>
        </div>
      </Form>
    </section>
  );
};
export default LoginUser;
