import Arrow from "./images/course-category-arrow.svg"
import classes from "./header1.module.css"
import { Link } from "react-router-dom";


const Header1= ()=>{
    return(
        <header className={classes.header}>
            <ul className={classes.ul}>
                <li><Link to="/" className={classes.link}>Home</Link> </li>
                <li><a href="#2" className={classes.link}>Course Categories
                <img src={Arrow} alt="arrow" style={{paddingLeft:"15px"}}/>
                </a> </li>
                <li><Link to="/about-us" className={classes.link}>About us</Link> </li>
                <li><Link to="/sign-in" className={classes.link}>Login</Link> </li>
                <li><Link to="/sign-up" className={classes.signup}>Sign up</Link> </li>
            </ul>

        </header>
    )
}

export default Header1;