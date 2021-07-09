import { Link } from "react-router-dom";
import Header2B from "../header/header2/header2B"
import classes from "./viewProfile.module.css"
import Footer from "../footer/footer2"

const ViewProfile =()=>{
    return(
        <div style={{background:"#f9f9f9"}}>
            <Header2B />
        <div className={classes.mainBox}>
            <aside>
            <h2>Settings</h2>
            <ul>
                <li className={classes.profileLink}>View Profile</li>
                <li><Link to="/account" className={classes.profileLink}>Account</Link></li>
                <li className={classes.profileLink}>Payment History</li>
                <li className={classes.profileLink}>Notification</li>
            </ul>
            </aside>
            <div className={classes.profileDiv}>
                <h3>Public profile</h3>
                <form>
                <label>Name</label> <br/>
                <input placeholder="First Name" type="text" className={classes.inputField}/> <br/>
                <input placeholder="Last Name" type="text" className={classes.inputField}/><br/>

                <label>Language</label>
                <br/>
                <select className={classes.select}>
                    <option>English (US)</option>
                    <option>Yoruba</option>
                    <option>Hausa</option>
                    <option>Arabic</option>
                    <option>French</option>
                    <option>English (US)</option>
                    <option>English (US)</option>
                    <option>English (US)</option>
                </select>
                <br/>
                <label>Links</label>
                <div className={classes.socialLinks}>
                    <span>http://twitter.com/</span>
                    <input placeholder="Twitter Profile" type="text" /> 
                </div>
                <p>Add your Twitter username (e.g. johnsmith).</p>
                <div className={classes.socialLinks}>
                    <span>http://www.facebook.com/</span>
                    <input type="text" placeholder="Facebook Profile" /> 
                </div>
                <p>Add your Twitter username (e.g. johnsmith).</p>
                
                <div className={classes.socialLinks}>
                    <span>http://www.linkedin.com/</span>
                    <input type="text" placeholder="Linkedin Profile" /> 
                </div>
                <p>Add your Twitter username (e.g. johnsmith).</p>
                <button>Save changes</button>
                </form>
            </div>
            
        </div>

        <Footer />
        </div>
    )
};


export default ViewProfile;