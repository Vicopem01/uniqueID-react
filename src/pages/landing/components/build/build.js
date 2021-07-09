import classes from "./build.module.css";
import { Link } from "react-router-dom";

const Build = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.h2}>
        Build , Create, Innovate with our top notch courses online
      </h2>
      <p className={classes.p}>
        Egestas eleifend risus dui tempor morbi maecenas scelerisque{" "}
      </p>
      <Link to="/all-courses" className={classes.a}>
        Explore Courses
      </Link>
    </div>
  );
};

export default Build;
