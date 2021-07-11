import { Link } from "react-router-dom";
import Arrow from "./images/course-category-arrow.svg"
import classes from "./header1.module.css"
import Menu from "./images/menu.svg"
import Logo from "./images/logo.svg"
import Search from "./images/search.svg"
import Cart from "./images/cart.svg"




const Header1= ()=>{
    return(
        <header className={classes.header}>
            <ul className={classes.ul1}>
                <li><Link to="/" className={classes.link}>Home</Link> </li>
                <li><a href="#2" className={classes.link}>Course Categories
                <img src={Arrow} alt="arrow" style={{paddingLeft:"15px"}}/>
                </a> </li>
                <li><Link to="/about-us" className={classes.link}>About us</Link> </li>
                <li><Link to="/sign-in" className={classes.link}>Login</Link> </li>
                <li><Link to="/sign-up" className={classes.signup}>Sign up</Link> </li>
            </ul>
            <ul>
                <li><img src={Menu} alt="menu"/></li>
                <li><img src={Logo} alt="logo"/></li>
                <li><img src={Search} alt="search"/></li>
                <li><img src={Cart} alt="cart"/></li>
            </ul>
        </header>
    )
}

export default Header1;