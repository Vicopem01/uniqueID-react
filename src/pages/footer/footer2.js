import classes from "./footer2.module.css"
import Logo from "./images/logo-light.svg"
import Phone from "./images/phone.svg"
import Mail from "./images/mail.svg"
import Location from "./images/location.svg"
import Facebook from "./images/facebook.svg"
import Twitter from "./images/twitter.svg"
import Linkedin from "./images/linkedin.svg"
import Instagram from "./images/instagram.svg"
import { Link } from "react-router-dom";



const Footer =()=>{
    return(
        <div className={classes.div}>
        <div className={classes.flexbox}>
            <div className={classes.left}>
            <Link to="/"><img src={Logo} alt="logo" className={classes.logo} /></Link>
            <div>
                <p>About Us</p>
                <span>The UniqueIQ is the first of its kind in
                     {<br/>}Africa. An organisation that leverages
                     {<br/>} best in class teachers, </span>

            </div>
            <div className={classes.leftDiv}>
                <p>Contact Us</p>
                    <div>
                    <img src={Phone} alt="Phone"/>
                    <span>+2349080281275</span>
                    </div>
                    <br/>
                    <div>
                <img src={Mail} alt="Mail"/>
                <span>grazactech@gmail.com</span>
                </div>
                <br/>
                <div>
                <img src={Location} alt="Location"/>
                <span>2a Ibara housing estate kuto, Abeokuta 
                    {<br/>} Ogun state</span>
                    </div>
            </div>
            </div>


            <div className={classes.right}>
            <div>
                <p>Information</p>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/">Logout</Link></li>
                    <li><Link to="/about-us">Our Story</Link></li>
                </ul>
            </div>
            <div>
            <p>Learning</p>
                <ul>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Syllabus</a></li>
                    <li><a href="#">Pricing</a></li>
                </ul>
            </div>
            <div>
            <p>Helpful Links</p>
                <ul>
                    <li><a href="#">Customer Support</a></li>
                    <li><Link to="/">Logout</Link></li>
                    <li><Link to="/about-us">Our Story</Link></li>
                </ul>
            </div>
            <div>
                <form className={classes.form}>
                    <label for="input">Subscribe</label>
                    <br/>
                    <img src={Mail} alt="mail"/>
                    <input type="email" required placeholder="Enter your Email" id="input"/>
                    <br/>
                    <button>Subscribe</button>
                </form>
            </div>
            </div>
        </div>

        <div className={classes.socialmedia}>
        <a href="#"><img src={Facebook} alt="logo"/></a>
        <a href="#"><img src={Twitter} alt="logo"/></a>
        <a href="#"><img src={Linkedin} alt="logo"/></a>
        <a href="#"><img src={Instagram} alt="logo"/></a>
        </div>
        </div>
    )
}


export default Footer;