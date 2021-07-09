import { useEffect } from "react";
import classes from "./allCourse.module.css";
import Header from "../header/header1/header1";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import BrowseCards from "../landing/components/browseCourses/browsecards";
import Image1 from "../allCourse/images/image1.svg";
import Image2 from "../allCourse/images/image2.svg";
import Image3 from "../allCourse/images/image3.svg";
import EyeBlur from "../allCourse/images/eye-blur.svg";
import Eyeclear from "../allCourse/images/eye-clear.svg";
import Stars from "../allCourse/images/stars.svg";
import Next from "../allCourse/images/nextArrow.svg";
import Prev from "../allCourse/images/prevArrow.svg";
import Search from "../allCourse/images/search.svg";



const AllCourse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <header className={classes.header}>
        <Header />
        <div className={classes.titleFit}>
          <h1>
            Relax ,Learn
            <br /> And be Creative
          </h1>
          <p>
            Nec ultrices est auctor arcu eget neque. Ultrices at
            <br />
            pulvinar elementum, convallis nisl, aenean ornare.
          </p>
          <Link to="/course-preview" className={classes.a}>Enroll Now</Link>
        </div>
      </header>
      <section className={classes.courses}>
          <div className={classes.container}>

        <aside className={classes.aside}>
            <p>Courses</p>
            <ul> 
                <li>Artficial Intelligence <span>(45)</span> </li>
                <li>Agile & HR Development <span>(45)</span></li>
                <li>Branding & Designs <span>(45)</span></li>
                <li>Business <span>(45)</span></li>
                <li>Data & analytics <span>(45)</span></li>
                <li>Programming<span>(45)</span></li>
            </ul>
            <p>Author</p>
            <ul> 
                <li>Kolawole Tobi <span>(5)</span> </li>
                <li>Oluwatobi K <span>(4)</span> </li>
                <li>Victor Black <span>(5)</span> </li>
                <li>Adeleye G <span>(5)</span> </li>
                <li>Ogunbemi Titi <span>(5)</span>  </li>
                <li>Programming <span>(5)</span> </li>
            </ul>
            <p>Skills</p>
            <ul> 
                <li>Beginner <span>(4)</span></li>
                <li> Intermidate <span>(4)</span> </li>
                <li>Advanced <span>(4)</span> </li>
            </ul>
        </aside>
        <div className={classes.cardContainer}>
            <div className={classes.search}>
            <input type="text" placeholder="Search" />
            <img src={Search} alt="Search" />
            </div>
            <div className={classes.twoCards}>
        <BrowseCards
        img={Image1}
        text="Branding: The Creative Journey"
        name="Ogungbemi Tobi"
        star={Stars}
        eye={EyeBlur}/>
        <BrowseCards
        img={Image2}
        text="Branding: The Creative Journey"
        name="Ogungbemi Tobi"
         star={Stars}
         eye={EyeBlur}/>
         </div>
            <div className={classes.twoCards}>
        <BrowseCards
        img={Image3}
        text="Branding: The Creative Journey"
        name="Ogungbemi Tobi"
        star={Stars}
        eye={EyeBlur}/>
        <BrowseCards
        img={Image2}
        text="Branding: The Creative Journey"
        name="Ogungbemi Tobi"
         star={Stars}
         eye={EyeBlur}/>
         </div>
            <div className={classes.twoCards}>
        <BrowseCards
        img={Image1}
        text="Branding: The Creative Journey"
        name="Ogungbemi Tobi"
        star={Stars}
        eye={EyeBlur}/>
        <BrowseCards
        img={Image2}
        text="Branding: The Creative Journey"
        name="Ogungbemi Tobi"
         star={Stars}
         eye={EyeBlur}/>
         </div>
            <div className={classes.twoCards}>
        <BrowseCards
        img={Image1}
        text="Branding: The Creative Journey"
        name="Ogungbemi Tobi"
        star={Stars}
        eye={EyeBlur}/>
        <BrowseCards
        img={Image2}
        text="Branding: The Creative Journey"
        name="Ogungbemi Tobi"
         star={Stars}
         eye={EyeBlur}/>
         </div>
            <div className={classes.twoCards}>
        <BrowseCards
        img={Image1}
        text="Branding: The Creative Journey"
        name="Ogungbemi Tobi"
        star={Stars}
        eye={EyeBlur}/>
        <BrowseCards
        img={Image2}
        text="Branding: The Creative Journey"
        name="Ogungbemi Tobi"
         star={Stars}
         eye={EyeBlur}/>
         </div>
            <div className={classes.twoCards}>
        <BrowseCards
        img={Image1}
        text="Branding: The Creative Journey"
        name="Ogungbemi Tobi"
        star={Stars}
        eye={EyeBlur}/>
        <BrowseCards
        img={Image2}
        text="Branding: The Creative Journey"
        name="Ogungbemi Tobi"
         star={Stars}
         eye={EyeBlur}/>
         </div>

        <img src={Prev} alt="Prev" className={classes.prev}/>
        <img src={Next} alt="Next" className={classes.next}/>
         </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AllCourse;
