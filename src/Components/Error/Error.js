import classes from "./Error.module.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ErrorComponent = ({ message, img }) => {
  return (
    <section>
      <Navbar />
      <div className={classes.error}>
        <h2>{message}</h2>
        <img src={img} />
      </div>
      <Footer />
    </section>
  );
};

export default ErrorComponent;
