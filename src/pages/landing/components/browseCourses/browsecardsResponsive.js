import { Link } from "react-router-dom";
import classes from "./browsecardsResponsive.module.css";

const Cards = (props) => {
  return (
    <Link className={classes.box} to="/course-preview">
      <p  className={classes.hiddenP}>Preview Course</p>
      <img src={props.img} alt="Image" className={classes.mainImage}/>
      <div className={classes.inner}>
        <h5>{props.text}</h5>
        <p>{props.name}</p>
        <div className={classes.items}>
          <img className={classes.starRatings} src={props.star} alt="Ratings" />
          <span className={classes.shiftitems}>4.0</span>
          <img
            style={{ alignSelf: "end", marginRight: "5px" }}
            src={props.eye}
            alt="Views"
          />
          <span>1,000</span>
        </div>
        <div style={{ direction: "rtl" }}>
          <del>$100</del>
          <span className={classes.price}>$30</span>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
