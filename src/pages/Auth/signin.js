import { useEffect } from "react";
import Logo from "./images/logo-light.svg";
import classes from "./signin.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <header className={classes.nav}>
        <Link to="/" className={classes.link}>
          <img src={Logo} alt="Logo" />
        </Link>
      </header>

      <div className={classes.container}>
        <div className={classes.head}>
          <Link to="/sign-up" className={classes.signup}>
            SIGN UP
          </Link>
          <span className={classes.signin}>SIGN IN</span>
        </div>

        <h2>Login to your account</h2>
        <p className={classes.p}>
          Build skills for today, tomorrow, and beyond.
          <br />
          Education to future-proof your career
        </p>
        <form className={classes.form}>
          <input
            type="email"
            placeholder="Email address"
            required
            className={classes.mail}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className={classes.password3}
          />
          <Link to="/dashboard" className={classes.button}>SIGN IN</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
