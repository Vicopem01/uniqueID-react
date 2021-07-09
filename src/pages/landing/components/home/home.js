import Header1 from "../../../header/header1/header1";
import classes from "./home.module.css"
import Search from "../../images/search-icon.svg"
import Man from '../../images/man-reading.png'


const Home = ()=>{
    return(
        <div className={classes.home}>
            <Header1 />
                <div className={classes.flex}>
                    <div className={classes.left}>
                    <h1>You Can Start
                    {<br />} Learning At Any Age!</h1>
                    <p className={classes.p}>Our courses are desgined  to provide traning that’s as {<br/>} streamlined and to th the end point as possible</p>
                    <div className={classes.inputContainer}>
                    <input className={classes.input} type="text" placeholder="Search For Course" />
                    <img src={Search} alt="Search" />
                    </div>
                    </div>
                  <div className={classes.right}>
                    <img src={Man} alt="Man" />
                    </div>

                </div>
        </div>
    )
}

export default Home;