import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../header/header1/header1";
import Footer from "../footer/footer";
import classes from "./preview.module.css";
import Stars from "../preview/images/star.svg";
import Share from "../preview/images/share.svg";
import Avatar from "../preview/images/avatar.svg";
import Man from "../preview/images/man-video.svg";
import Play from "../preview/images/play.svg";
import Check from "../preview/images/check.svg";
import Circle from "../preview/images/circle.svg";
import Plus from "../preview/images/plus.svg";
import Stars3 from "../preview/images/3stars.svg";


const Preview =()=>{
    useEffect(() => {
        window.scrollTo(0, 0);
      });
    
    return(
        <div>
            <div style={{background: "#301446"}}>
            <Header />
            <div className={classes.headerContent}>
                <div>
                <h1>Branding : Introduction to Personal Branding</h1>
                <p>Begin your Career as a Branding Specialist. 
                Master branding strategies, branded content
                 generation, image creation and customer experience</p>
                 <div className={classes.starBox}>
                     <img src={Stars} alt="Stars"/> <span>4.0</span>
                     <img src={Share} alt="Share"/> <span>Share</span>
                 </div>
                <div  className={classes.tobi}>
                    <img src={Avatar} alt="Avatar"/> <span>Ogungbemi Tobi</span>
                </div>
                <div className={classes.price}>
                    <span>$50</span>
                    <del>100</del>
                </div>
                <div>
                    <Link to="/sign-up" className={classes.alink1}>Buy Now</Link>
                    <a className={classes.alink2}>Add to cart</a>
                </div>
                <p>3,000 student enrolled</p>
                </div>
                <div className={classes.preview}>
                <img src={Man} alt="video" className={classes.mainImage}/>
                <img src={Play} alt="Play" className={classes.play}/>
                <p>Preview Course</p>
                </div>
            </div>
            </div>
            <section className={classes.learn}>
                <h2>WHAT YOU WILL LEARN</h2>
                <div className={classes.ul}>
                <ul className={classes.ul1}>
                    <li><img src={Check} alt="check"/><span>Create a value proposition for a brand: How it can be positioned and mapped.</span></li>
                    <li><img src={Check} alt="check"/><span>Develop a complete creative pitch.</span></li>
                    <li><img src={Check} alt="check"/><span>Examine Branding activities through the lens of Customer Experience.</span></li>
                    <li><img src={Check} alt="check"/><span>Learn how to produce meaningful and engaging content.</span></li>
                </ul>
                <div></div>
                <ul className={classes.ul2}>
                    <li><img src={Circle} alt="circle"/><span>Shareable Certificate</span></li>
                    <li><img src={Circle} alt="circle"/><span>Shareable Certificate</span></li>
                    <li><img src={Circle} alt="circle"/><span>100% online courses</span></li>
                    <li><img src={Circle} alt="circle"/><span>Life time access.</span></li>
                    <li><img src={Circle} alt="circle"/><span>Approx. 5 months to complete</span></li>
                </ul>
                </div>
            </section>
            <section className={classes.requirement}>
                <h3>REQIUREMENT</h3>
                <ul>
                    <li>Nothing but motivate yourself</li>
                    <li>Good internet connection</li>
                </ul>
                <h3>DESCRIPTION</h3>
                <p>This Specialization aims to make branding concepts accessible
                     to every learner and to teach them to analyze and apply all
                      the relevant concepts, using the broad and diverse toolkit 
                      of branding. It provides you with the necessary tools so 
                      that you are able to understand the brand behavior, 
                      understand the language of a brand and learn about the 
                      rational and emotional elements behind brands. It also
                       attempts to make you understand the language of images.
                        The amount of audiovisual content we receive today
                         makes it hard for brands to break through that
                          noise. It ends up teaching how to understand branding
                           efforts in the context of customer experience.</p>
            </section>
            <section className={classes.outline}>
                <h3>COURSE OUTLINE </h3>
            <ul>
                <li><img src={Plus} alt=" "/><span>Introduction & Class #1: Launching a New Company
                    </span><span>11 lectures</span><span>01:03:52</span></li>
                <li><img src={Plus} alt=" "/><span>Introduction & Class #1: Launching a New Company
                    </span><span>11 lectures</span><span>01:03:52</span></li>
                <li><img src={Plus} alt=" "/><span>Introduction & Class #1: Launching a New Company
                    </span><span>11 lectures</span><span>01:03:52</span></li>
                <li><img src={Plus} alt=" "/><span>Introduction & Class #1: Launching a New Company
                    </span><span>11 lectures</span><span>01:03:52</span></li>
                <li><img src={Plus} alt=" "/><span>Introduction & Class #1: Launching a New Company
                    </span><span>11 lectures</span><span>01:03:52</span></li>
                <li><img src={Plus} alt=" "/><span>Introduction & Class #1: Launching a New Company
                    </span><span>11 lectures</span><span>01:03:52</span></li>
            </ul>
                </section>
            <section className={classes.feedback}>
            <h3>STUDENT FEEDBACK</h3>
            <div className={classes.star4} >
                <span className={classes.bigText}>4.0</span>
                <div className={classes.starReview}>
                    <img src={Stars} alt="stars"/>
                    <span className={classes.smallText}>24 reviews</span>
                </div>
            </div>
            <div className={classes.reviewBox}>
                <span>5 stars</span>
                <div className={classes.mainDiv}>
                    <div className={classes.subDiv} style={{width:"50%"}}></div>
                </div>
                <span>50%</span>
            </div>
            <div className={classes.reviewBox}>
                <span>5 stars</span>
                <div className={classes.mainDiv} >
                    <div className={classes.subDiv} style={{width:"72%"}}></div>
                </div>
                <span>72%</span>
            </div>
            <div className={classes.reviewBox}>
                <span>5 stars</span>
                <div className={classes.mainDiv}>
                    <div className={classes.subDiv} style={{width:"12%"}}></div>
                </div>
                <span>12%</span>
            </div>
            <div className={classes.reviewBox}>
                <span>5 stars</span>
                <div className={classes.mainDiv}>
                    <div  className={classes.subDiv} style={{width:"2%"}}></div>
                </div>
                <span>2%</span>
            </div>
            </section>
            <section className={classes.students}>
            <div className={classes.allContent}>
                <div className={classes.leftContent}>
                    <div className={classes.h4Box}>
                    <h4>JN</h4>
                    </div>
                    <p>2 weeks ago <br/>Jessy Ndendzi</p>
                </div>
                <div className={classes.righContent}>
                <img src={Stars} alt=""/>
                <p>Very insightful course. It helps to
                    have a better understanding of key
                    elements related to the birth and
                    growth of a company. Thanks Chris.</p>
                </div>
            </div>
            <div className={classes.allContent}>
                <div className={classes.leftContent}>
                    <div className={classes.h4Box}>
                    <h4>JN</h4>
                    </div>
                    <p>2 weeks ago <br/>Jessy Ndendzi</p>
                </div>
                <div className={classes.righContent}>
                <img src={Stars3} alt=""/>
                <p>Very insightful course. It helps to
                    have a better understanding of key
                    elements related to the birth and
                    growth of a company. Thanks Chris.</p>
                </div>
            </div>
            <div className={classes.allContent}>
                <div className={classes.leftContent}>
                <div className={classes.h4Box}>
                    <h4>JN</h4>
                    </div>
                    <p>2 weeks ago <br/>Jessy Ndendzi</p>
                </div>
                <div className={classes.righContent}>
                <img src={Stars3} alt=""/>
                <p>Very insightful course. It helps to
                    have a better understanding of key
                    elements related to the birth and
                    growth of a company. Thanks Chris.</p>
                </div>
            </div>
            </section>
            <div className={classes.comment}>
                <div className={classes.spacing}>
                <span className={classes.text}>Comment</span>
                <div>
                    <span className={classes.pages}>1</span>
                    <span className={classes.pages}>2</span>
                    <span className={classes.pages}>3</span>
                    <span className={classes.pages}>Next</span>
                    <span className={classes.pages}>Prev</span>
                </div>
                </div>
                <div className={classes.textareaBox}>
                <textarea></textarea>
                    <span>Save</span>
                </div>
            </div>

            <Footer />
        </div>
    )
}


export default Preview;