import classes from "./students.module.css";
import Person1 from "../../images/person1.svg";
import Person2 from "../../images/person2.svg";
import Person3 from "../../images/person3.svg";
import Studentarrow from "../../images/student-arrow.svg"


const Students = () => {
  return (
    <div className={classes.div}>
      <h2 className={classes.h2}>What Our Students Have To Say</h2>
      <div className={classes.flex}>
        <div className={classes.box}>
          <div className={classes.imgtext}>
            <span>
              <img src={Person1} alt="avatar" />
            </span>
            <span> Mary</span>
          </div>
          <p>
            TheUniqueIQ is a life saver. I don't have the time or money for a
            college education. My goal is to become a freelance web developer,
            and thanks to TheUniqueIQ, I'm really close.
          </p>
        </div>

        <div className={classes.box}>
          <div className={classes.imgtext}>
            <span>
              <img src={Person2} alt="avatar" />
            </span>
            <span> Mary</span>
          </div>
          <p>
            TheUniqueIQ is a life saver. I don't have the time or money for a
            college education. My goal is to become a freelance web developer,
            and thanks to TheUniqueIQ, I'm really close.
          </p>
        </div>

        <div className={classes.box}>
          <div className={classes.imgtext}>
            <span>
              <img src={Person3} alt="avatar" />
            </span>
            <span> Mary</span>
          </div>
          <p>
            TheUniqueIQ is a life saver. I don't have the time or money for a
            college education. My goal is to become a freelance web developer,
            and thanks to TheUniqueIQ, I'm really close.
          </p>
        </div>
        <div className={classes.arrow}>
        <img src={Studentarrow} alt="next"/>
        </div>
      </div>
    </div>
  );
};

export default Students;
