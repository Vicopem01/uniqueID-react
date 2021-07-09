import classes from "./studentDashboard.module.css"
import Image from "./images/img.svg"


const Cards=()=>{
    return(
        <div className={classes.boxContainer}>
                <img src={Image} alt="" />
                <div>
                    <p>Branding: The Creative Journey</p>
                 <div className={classes.mainDiv}>
                    <div className={classes.subDiv}></div>
                 </div>
                    <span className={classes.leftSpan}>2h 38m</span><span className={classes.leftSpan}>Get started</span>
                </div>
        </div>
    )
};

export default Cards;