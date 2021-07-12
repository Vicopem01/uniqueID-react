import { Link } from "react-router-dom";
import classes from "./header2.module.css";
import Logo from "./images/logo-light.svg" ;
import Search from "./images/search.svg";
import Dropdown from "./images/dropdown-arrow.svg";
import Cart from "./images/cart.svg";
import Bell from "./images/bell.svg";
import Courses from "./header2Courses";
import Menu from "./images/menu.svg"
import ForwardArrow from "./images/forward-arrow.svg"


const Header2 =()=>{
    return(
        <header className={classes.header}>
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
            <span>See all</span>
        </div>
            <img src={Cart} alt="" className={classes.cart}/>
            <img src={Bell} alt=""/>
        </div>
            <div className={classes.profile}>
                <h2>K</h2>
            </div>
            <img src={Menu} alt="menu"  className={classes.menu}/>
            <Link to="/"> <img src={Logo} alt="logo" className={classes.logo} /></Link>
            <img src={Search} alt="search" className={classes.search}/>
            <img src={Cart} alt="cart" className={classes.cart}/>


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