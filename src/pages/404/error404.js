import { Link } from "react-router-dom";
import classes from "./error404.module.css";
import Error from "./404-error.png";



const Error404 =()=>{
    return(
        <div className={classes.error}>
            <img src={Error} alt="Error"/>
            <h1 className={classes.oops}>Page not found</h1>
            <Link to="/" className={classes.a}>Go back to home</Link>
        </div>
    );
};



export default Error404;