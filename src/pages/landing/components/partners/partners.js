import classes from "./partners.module.css"
import Google from "../../images/google.svg"
import Andela from "../../images/andela.svg"
import Intelia from "../../images/intelia.svg"
import Flutterwave from "../../images/flutterwave.svg"
import Paystack from "../../images/paystack.svg"

const Partners =()=>{
    return(
        <div className={classes.div}>
            <h2 className={classes.h2}>Our Tutors And Mentors Come From Leading Companies</h2>
            <div className={classes.images}>
                <img src={Google} alt="logo"/>                
                <img src={Andela} alt="logo"/>                
                <img src={Intelia} alt="logo"/>                
                <img src={Flutterwave} alt="logo"/>                
                <img src={Paystack} alt="logo"/>                
            </div>
        </div>
    )
}

export default Partners;