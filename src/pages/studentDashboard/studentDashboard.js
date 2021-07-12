import classes from "./studentDashboard.module.css"
import Header2 from "../header/header2/header2"
import Cards from "./courseCards"
import Forward from "./images/forward.svg"
import Footer from "../footer/footer2"
import CircleArrow from "./images/circleArrow.svg"
import BrowseCards from "../landing/components/browseCourses/browsecards"
import CourseImage from "./images/courseImage.svg"
import Star from "./images/star.svg"
import EyeClear from "./images/eyeclear.svg"
import Partners from "../landing/components/partners/partners"

const StudentDashboard =()=>{
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
            <section className={classes.overflow}>
                <h2>Welcome back, Kolawole</h2>
                <p  className={classes.overflowText}>Ready to dive in ?</p>
                <div className={classes.mainCard}>
                    <div className={classes.subCard}>
                    <Cards/>
                    <Cards/>
                    </div>
                    <div className={classes.subCard}>
                    <Cards/>
                    <Cards/>
                    </div>
                   
                </div>
                <img src={Forward} alt="" className={classes.forward}/>
            </section>
            <section className={classes.next}>
                <h2>What  you can learn next</h2>
                <div >
                    <p>Business</p>
                    <p>Colour Management</p>
                    <p>Product Design</p>
                    <p>Typography</p>
                </div>
                <div >
                    <p>Business</p>
                    <p>Colour Management</p>
                    <p>Product Design</p>
                    <p>Typography</p>
                </div>
                <img src={CircleArrow} alt=""/>
            </section>
            <section className={classes.courses}>
                <div>
                    <p className={classes.coursesText}>Because you enroll in <strong>“Branding creative  Basics”</strong></p>
                    <div  className={classes.coursesDiv}>
                        <BrowseCards
                        img={CourseImage}
                        text="Introduction to Personal Branding"
                        name="Ogungbemi Tobi"
                        star={Star}
                        eye={EyeClear} />
                        <BrowseCards
                        img={CourseImage}
                        text="Introduction to Personal Branding"
                        name="Ogungbemi Tobi"
                        star={Star}
                        eye={EyeClear} />
                        <BrowseCards
                        img={CourseImage}
                        text="Introduction to Personal Branding"
                        name="Ogungbemi Tobi"
                        star={Star}
                        eye={EyeClear} />
                    </div>
                    <p className={classes.coursesText}>Top course on Branding</p>
                    <div  className={classes.coursesDiv}>
                    <BrowseCards
                        img={CourseImage}
                        text="Introduction to Personal Branding"
                        name="Ogungbemi Tobi"
                        star={Star}
                        eye={EyeClear} />
                        <BrowseCards
                        img={CourseImage}
                        text="Introduction to Personal Branding"
                        name="Ogungbemi Tobi"
                        star={Star}
                        eye={EyeClear} />
                        <BrowseCards
                        img={CourseImage}
                        text="Introduction to Personal Branding"
                        name="Ogungbemi Tobi"
                        star={Star}
                        eye={EyeClear} />
                    </div>
                    <p className={classes.coursesText}>Short and creative course for you</p>
                    <div  className={classes.coursesDiv}>
                    <BrowseCards
                        img={CourseImage}
                        text="Introduction to Personal Branding"
                        name="Ogungbemi Tobi"
                        star={Star}
                        eye={EyeClear} />
                        <BrowseCards
                        img={CourseImage}
                        text="Introduction to Personal Branding"
                        name="Ogungbemi Tobi"
                        star={Star}
                        eye={EyeClear} />
                        <BrowseCards
                        img={CourseImage}
                        text="Introduction to Personal Branding"
                        name="Ogungbemi Tobi"
                        star={Star}
                        eye={EyeClear} />
                    </div>
                </div>
            </section>
            <Partners />
            <Footer />
        </div>
    )
};

export default StudentDashboard;