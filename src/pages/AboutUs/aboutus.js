import { useEffect } from "react";
import Header1 from "../header/header1/header1";
import classes from "./aboutus.module.css";
import Icon1 from "../AboutUs/images/icon1.svg";
import Icon2 from "../AboutUs/images/icon2.svg";
import Icon3 from "../AboutUs/images/icon3.svg";
import Partners from "../landing/components/partners/partners";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";



const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });


  return (
    <div className={classes.about}>
      <div className={classes.color}>
         <Header1 />

      </div>
      <section className={classes.h2Container}>
        <h2 className={classes.h2}>Discover the creativity in you.</h2>
      </section>
      <section className={classes.textcontainer}>
        <p>
          Mauris suspendisse ut urna faucibus aenean nisl blandit mauris, erat.
          Nunc lorem vel odio viverra quam. Turpis sed sit dictum habitant
          dignissim quam suscipit vitae. Enim sollicitudin risus interdum etiam
          volutpat pellentesque non. Tellus vestibulum nisl, vitae, nullam
          pellentesque vel.
        </p>
        <p>
          Mauris suspendisse ut urna faucibus aenean nisl blandit mauris, erat.
          Nunc lorem vel odio viverra quam. Turpis sed sit dictum habitant
          dignissim quam suscipit vitae. Enim sollicitudin risus interdum etiam
          volutpat pellentesque non. Tellus vestibulum nisl, vitae, nullam
          pellentesque vel.
        </p>
      </section>
      <h3>At UniqueIQ , We Inspire student to:</h3>
      <div className={classes.flex}>
        <div className={classes.flexcontainer}>
          <img src={Icon1} alt="Icon" />
          <p className={classes.main}>To be Creative</p>
          <p className={classes.sub}>
            {" "}
            Tellus vestibulum nisl, vitae, nullam pellentesque vel
          </p>
        </div>
        <div className={classes.flexcontainer}>
          <img src={Icon2} alt="Icon" />
          <p className={classes.main}>To be Creative</p>
          <p className={classes.sub}>
            {" "}
            Tellus vestibulum nisl, vitae, nullam pellentesque vel
          </p>
        </div>
        <div className={classes.flexcontainer}>
          <img src={Icon3} alt="Icon" />
          <p className={classes.main}>To be Creative</p>
          <p className={classes.sub}>
            {" "}
            Tellus vestibulum nisl, vitae, nullam pellentesque vel
          </p>
        </div>
      </div>
      <section className={classes.explore}>
        <h2>Be whom you desire to be with us today</h2>
        <p>Turpis sed sit dictum habitant 
            dignissim quam suscipit vitae. Enim
             sollicitudin risus interdum etiam </p>
             <Link to="/all-courses" className={classes.link}>Explore Courses</Link>
      </section>
        <Partners/>
        <Footer />
    </div>
  );
};

export default AboutUs;
