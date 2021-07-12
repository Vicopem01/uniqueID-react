import { Link } from "react-router-dom";
import Arrow from "./images/course-category-arrow.svg"
import ForwardArrow from "./images/forward-arrow.svg"
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
            <div className={classes.smallHeader}>
                <img src={Menu} alt="menu"  className={classes.menu}/>
                <Link to="/"> <img src={Logo} alt="logo" className={classes.logo} /></Link>
                <img src={Search} alt="search" className={classes.search}/>
                <img src={Cart} alt="cart" className={classes.cart}/>
            <div className={classes.hiddenMenu}>
                <ul className={classes.ul3}>
                    <li><Link to="/sign-in">Sign Up</Link></li>
                    <li><Link to="/sign-in">Log in</Link></li>
                </ul>
                <p>Course</p>
                <ul className={classes.ul4}>
                    <li>Artficial Intelligence <img src={ForwardArrow} alt=""/></li>
                    <li>Branding <img src={ForwardArrow} alt=""/></li>
                    <li>Business <img src={ForwardArrow} alt=""/></li>
                    <li>Design <img src={ForwardArrow} alt=""/></li>
                    <li>Data & Analytic <img src={ForwardArrow} alt=""/></li>
                    <li>Help</li>
                </ul>
            </div>
            </div>
        </header>
    )
}

export default Header1;