import classes from "./utilizing.module.css";
import Icon1 from "../../images/icon1.svg";
import Icon2 from "../../images/icon2.svg";
import Icon3 from "../../images/icon3.svg";
import Icon4 from "../../images/icon4.svg";

const Utilize = () => {
  return (
    <div>
      <h2 className={classes.h2}>
        Utilizing your time and rescourses for creativity
      </h2>
      <p className={classes.p}>
        Egestas eleifend risus dui tempor morbi maecenas scelerisque{" "}
      </p>
      <div className={classes.flex}>
        <div className={classes.box}>
          <div>
          <img src={Icon1} alt="image" className={classes.img1} />
          </div>
          <div>
          <p>Learn From Your Comfort Zone’s</p>
          <span>
            Egestas eleifend risus dui tempor morbi maecenas scelerisque eu.
            Eget ultrices cursus at vel.
          </span>
          </div>
        </div>

        <div className={classes.box}>
          <div>
          <img src={Icon2} alt="image" />
          </div>
          <div>
          <p>Learn From Expert in the Industry.</p>
          <span>
            Egestas eleifend risus dui tempor morbi maecenas scelerisque eu.
            Eget ultrices cursus at vel.
          </span>
        </div>
        </div>
        
        <div className={classes.box}>
          <div>
          <img src={Icon3} alt="image" />
          </div>
          <div>
          <p>All Courses Simplified as Much As Possible</p>
          <span>
            Egestas eleifend risus dui tempor morbi maecenas scelerisque eu.
            Eget ultrices cursus at vel.
          </span>
        </div>
        </div>

        <div className={classes.box}>
          <div>
          <img src={Icon4} alt="image" />
          </div>
          <div>
          <p>All Courses Simplified as Much As Possible</p>
          <span>
            Egestas eleifend risus dui tempor morbi maecenas scelerisque eu.
            Eget ultrices cursus at vel.
          </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Utilize;
