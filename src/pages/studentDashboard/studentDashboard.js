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
                <p>Ready to dive in ?</p>
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
                    <p>Because you enroll in <strong>“Branding creative  Basics”</strong></p>
                    <div>
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
                <div>
                    <p>Top course on Branding</p>
                    <div>
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
                <div>
                    <p>Short and creative course for you</p>
                    <div>
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

            <Footer />
        </div>
    )
};

export default StudentDashboard;