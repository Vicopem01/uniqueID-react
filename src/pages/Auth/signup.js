import { useEffect } from "react";
import Logo from "./images/logo-light.svg";
import classes from "./signup.module.css";
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

      <div>
        <div className={classes.container}>
          <div className={classes.head}>
            <span className={classes.signup}>SIGN UP</span>
            <Link to="/sign-in" className={classes.signin}>SIGN IN</Link>
          </div>
          <h2>Create your account</h2>
          <p className={classes.p}>
            Build skills for today, tomorrow, and beyond.
            <br />
            Education to future-proof your career
          </p>
          <form className={classes.form}>
            <input
              type="text"
              placeholder="First Name"
              required
              className={classes.fname}
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              className={classes.lname}
            />
            <input
              type="email"
              placeholder="Email address"
              className={classes.mail}
            />
            <input
              type="password"
              placeholder="Password"
              required
              className={classes.password1}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className={classes.password2}
            />
            <p>
              By clicking Sign Up, you agree to our <a>Terms of Use</a> and our{" "}
              <a>Privacy Policy.</a>
            </p>
            <Link to="/dashboard" className={classes.button}>SIGN UP</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
