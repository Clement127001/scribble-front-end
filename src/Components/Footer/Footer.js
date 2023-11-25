import classes from "./Footer.module.css";
import logo from "../../Assets/text-based-logo.png";
import twitter from "../../Assets/Icons/twitter.png";
import pinterest from "../../Assets/Icons/pinterest.png";
import insta from "../../Assets/Icons/insta.png";
import facebook from "../../Assets/Icons/facebook.png";
import copy from "../../Assets/Icons/copy.png";

import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-main"]}>
        <NavLink to="/">
          {" "}
          <img src={logo} alt="footer-logo" />
        </NavLink>

        <div className={classes.links}>
          <NavLink to="#">For Developers</NavLink>
          <NavLink to="#">Freelance Work</NavLink>
          <NavLink to="#">Hire Talents</NavLink>
          <NavLink to="#">Insipiration</NavLink>
          <NavLink to="#">Blog</NavLink>
          <NavLink to="#">About</NavLink>
          <NavLink to="#">Career Support</NavLink>
        </div>
        <div className={classes.social}>
          <img src={facebook} alt="facebook social" />
          <img src={pinterest} alt="pinterst social" />
          <img src={insta} alt="istagram social" />
          <img src={twitter} alt="twitter social" />
        </div>
      </div>
      <div className={classes["footer-copyright"]}>
        <div className={classes.copy}>
          <div className={classes.copyright}>
            <img src={copy} alt="copyright" />
            2023 Scribble.
          </div>
          <p>Terms</p>
          <p>Privacy</p>
        </div>

        <div className={classes.support}>
          <p>Jobs</p>
          <p>Freelance</p>
          <p>Tags</p>
          <p>Place</p>
          <p>Resources</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
