import { Link } from "react-router-dom";
import classes from "./header2B.module.css";
import Logo from "./images/logo-light.svg" ;
import Search from "./images/search.svg";
import Dropdown from "./images/dropdown-arrowB.svg";
import Cart from "./images/cartB.svg";
import Bell from "./images/bellB.svg";
import Courses from "./header2Courses";
import Menu from "./images/menu.svg"
import ForwardArrow from "./images/forward-arrow.svg"


const Header2 =()=>{
    return(
        <header className={classes.header}>
            <img src={Menu} alt="menu"  className={classes.menu}/>
        <div className={classes.header2}>
            <Link to="/" >
            <img src={Logo} alt=""/></Link>
            <div className={classes.input}>
            <input placeholder="Search For Course"/>
            <img src={Search} alt=""/> 
            </div>  
            <div className={classes.myCourses}>
                <span>My courses</span>
                <img src={Dropdown} alt=""/>
            </div>
        <div className={classes.courseDropdown}>
            <Courses />
            <Courses />
            <Courses />
            <Courses />
            <Courses />
            <Link to="/my-courses">See all</Link>
        </div>
            <img src={Cart} alt="" className={classes.cart}/>
            <img src={Bell} alt=""/>
            <div className={classes.cartDropdown}>
                <p>Your cart is empty</p>
            <Link to="/all-courses">Explore Courses</Link>
            </div>
        </div>
            <Link to="/"> <img src={Logo} alt="logo" className={classes.logo} /></Link>
            <div className={classes.profile}>
                <h2>K</h2>
            </div>


        <div className={classes.profileDropdown}>
            <div className={classes.topDiv}>
                <div className={classes.profile1}>
                <h2>K</h2>
            </div>
            <h2 className={classes.profileName}>Kolawole Oluwatobi</h2>
            <p>kolawoletobbey@gmail.com</p>
            <Link to="/profile" className={classes.viewProfile}>View profile</Link>
            <h6 className={classes.course}> My Course</h6>
            </div>
            <ul className={classes.ul1}>
                <li><a className={classes.profileDropdownlink}>Notification</a> </li>
                <li><a className={classes.profileDropdownlink}>Message</a></li>
                <li><Link to="/account" className={classes.profileDropdownlink}>Account Settings</Link></li>
                <li><a className={classes.profileDropdownlink}>Help</a></li>
                <li><Link to="/" className={classes.profileDropdownlink}>Log out</Link></li>
            </ul>
            <ul className={classes.ul2}>
                <li>Artficial Intelligence <img src={ForwardArrow} alt=""/></li>
                <li>Branding <img src={ForwardArrow} alt=""/></li>
                <li>Business <img src={ForwardArrow} alt=""/></li>
                <li>Design <img src={ForwardArrow} alt=""/></li>
                <li>Data & Analytic <img src={ForwardArrow} alt=""/></li>
                <li>Help</li>
                <li><Link to="/" className={classes.profileDropdownlink}>Log out</Link></li>

            </ul>
        </div>


        </header>

    )
};
export default Header2