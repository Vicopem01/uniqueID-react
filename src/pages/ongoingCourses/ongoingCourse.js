import { useEffect } from "react";
import classes from "./ongoingCourse.module.css";
import Header2 from "../header/header2/header2";
import Footer from "../footer/footer2";
import Cards from "../studentDashboard/courseCards";


const OngoingCourse= ()=>{

    useEffect(() => {
        window.scrollTo(0, 0);
      });
    
    return(
        <div>
            <div className={classes.headerDiv}>
            <Header2 />
            </div>
            <section className={classes.main}>
            <h1>You Can Start <br/> Learning At Any Age!</h1>
            <p>Egestas eleifend risus dui tempor 
                morbi maecenas scelerisque eu.
                Eget ultrices cursus at vel.</p>
            </section>
            <section className={classes.courses}>
                <div>
            <p className={classes.pText}>Ongoing Courses</p>
            <div  className={classes.mainCon}>
                <div className={classes.subCon}>
                    <Cards />
                    <Cards />
                </div>
                <div className={classes.subCon}>
                    <Cards />
                    <Cards />
                </div>
            </div>
            </div>
            <div>
            <p className={classes.pText}>Ongoing Courses</p>
            <div  className={classes.mainCon}>
                <div className={classes.subCon}>
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
                <div className={classes.subCon}>
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
            </div>
            </div>
            </section>
            <Footer />
        </div>
    );
};

export default OngoingCourse;