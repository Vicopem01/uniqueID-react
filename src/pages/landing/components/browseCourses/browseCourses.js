import classes from "./browse.module.css";
import Cards from "./browsecards";
import Image1 from "../../images/image1.svg";
import Image2 from "../../images/image2.webp";
import Image3 from "../../images/image3.svg";
import Stars from "../../images/stars.svg";
import EyeBlur from "../../images/eye-blur.svg";
import EyeClear from "../../images/eye-clear.svg";
import ArrowForward from "../../images/arrow-forward.svg";
import { Link } from "react-router-dom";


const Browse = ()=>{

    return(
        <div className={classes.div}>
            <h2 className={classes.h2}>
            Browse Courses
            </h2>
            <ul className={classes.ul}>

            <li className={classes.li}>Artficial Intelligence</li>
            <li className={classes.li}>Agile & HR {<br/>}Development</li>
            <li className={classes.li}>Branding & {<br/>}Designs</li>
            <li className={classes.li}>Businesss</li>
            <li className={classes.li}>Data & {<br/>}Analytics</li>
            <li className={classes.li}>Programming</li>
            <Link to="/all-courses" className={classes.li}>More</Link>
            </ul>
            <br/>
            <div className={classes.flexbox}>
            <Cards img={Image1}
             text="Branding: The Creative Journey"
             name="Ogungbemi Tobi"
              star={Stars}
              eye={EyeBlur}/>
            <Cards img={Image2}
             text="Introduction to Personal Branding"
              name="Ogungbemi Tobi"
              star={Stars} 
              eye={EyeClear}/>
            <Cards img={Image3}
             text="Brand Identity and Strategy In Business"
              name="Ogungbemi Tobi"
              star={Stars} 
              eye={EyeBlur}/>
                <Link to="all-courses" className={classes.arrow}><img src={ArrowForward} alt="next" /></Link>
              </div> 
        </div>
    )
}

export default Browse;