import classes from "./header2.module.css";
import CourseImg from "./images/headerCourseImg.svg";



const Courses=()=>{
    return(
             <div className={classes.bigDiv}>
                <img src={CourseImg} alt=""/>
                <div>
                    <h5>Branding: The Creative Journey</h5>
                    <p>By Ogungbemi Tobi</p>
                </div>
            </div>
    )
};


export default Courses;