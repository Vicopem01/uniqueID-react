import { useEffect } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../header/header1/header1";
import Footer from "../footer/footer";
import classes from "./preview.module.css";
import Stars from "../preview/images/star.svg";
import Share from "../preview/images/share.svg";
import SharePurple from "../preview/images/share-purple.svg";
import Avatar from "../preview/images/avatar.svg";
import Man from "../preview/images/man-video.svg";
import ManMobile from "../preview/images/man-reading-mobile.svg";
import Play from "../preview/images/play.svg";
import Check from "../preview/images/check.svg";
import Circle from "../preview/images/circle.svg";
import Plus from "../preview/images/plus.svg";
import Stars3 from "../preview/images/3stars.svg";
import DropdownArrow from "./images/dropdown-arrow.svg";
import Dropdown2 from "./images/dropdown2.svg";

const Preview = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("Running");
  }, []);



  const [isActive, setIsActive] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    console.log(isTrue)
}, []);

  const Istrue = () => {
    setIsShow(!isShow);
    setIsTrue(!isTrue);
  };

  return (
    <div>
      <div className={classes.bigDiv}>
        <Header />
        <div className={classes.headerContent}>
          <div className={classes.mainHead}>
            <h1>Branding : Introduction to Personal Branding</h1>
            <p>
              Begin your Career as a Branding Specialist. Master branding
              strategies, branded content generation, image creation and
              customer experience
            </p>
            <div className={classes.starBox}>
              <img src={Stars} alt="Stars" /> <span>4.0</span>
              <img src={Share} alt="Share" />
              <img src={SharePurple} alt="" className={classes.sharePurple} />
              <span>Share</span>
            </div>
            <div className={classes.tobi}>
              <img src={Avatar} alt="Avatar" /> <span>Ogungbemi Tobi</span>
            </div>
            <div className={classes.price}>
              <span>$50</span>
              <del>$100</del>
            </div>
            <div className={classes.alinks}>
              <Link to="/sign-up" className={classes.alink1}>
                Buy Now
              </Link>
              <a className={classes.alink2}>Add to cart</a>
            </div>
            <p>3,000 student enrolled</p>
          </div>
          <div className={classes.preview}>
            <img src={Man} alt="video" className={classes.mainImage} />
            <img src={ManMobile} alt="video" className={classes.mainImage2} />
            <img src={Play} alt="Play" className={classes.play} />
            <p>Preview Course</p>
          </div>
        </div>
      </div>
      <section className={classes.learn}>
        <h2>WHAT YOU WILL LEARN</h2>
        <div className={classes.ul}>
          <ul className={classes.ul1}>
            <li>
              <img src={Check} alt="check" />
              <span>
                Create a value proposition for a brand: How it can be positioned
                and mapped.
              </span>
            </li>
            <li>
              <img src={Check} alt="check" />
              <span>Develop a complete creative pitch.</span>
            </li>
            <li>
              <img src={Check} alt="check" />
              <span>
                Examine Branding activities through the lens of Customer
                Experience.
              </span>
            </li>
            <li>
              <img src={Check} alt="check" />
              <span>Learn how to produce meaningful and engaging content.</span>
            </li>
          </ul>
          <div></div>
          <ul className={classes.ul2}>
            <li>
              <img src={Circle} alt="circle" />
              <span>Shareable Certificate</span>
            </li>
            <li>
              <img src={Circle} alt="circle" />
              <span>Shareable Certificate</span>
            </li>
            <li>
              <img src={Circle} alt="circle" />
              <span>100% online courses</span>
            </li>
            <li>
              <img src={Circle} alt="circle" />
              <span>Life time access.</span>
            </li>
            <li>
              <img src={Circle} alt="circle" />
              <span>Approx. 5 months to complete</span>
            </li>
          </ul>
        </div>
      </section>

      <section className={classes.requirement}>
        <h3 className={classes.remove}>REQUIREMENT</h3>
        <ul className={classes.remove}>
          <li>Nothing but motivate yourself</li>
          <li>Good internet connection</li>
        </ul>
        <h3 onClick={() => setIsActive(!isActive)} className={classes.reqMob}>
          REQUIREMENT
          <img src={DropdownArrow} alt="" />
        </h3>

        {isActive && (
          <div>
            <ul>
              <li>Nothing but motivate yourself</li>
              <li>Good internet connection</li>
            </ul>
          </div>
        )}
        <h3>DESCRIPTION</h3>
        <p className={classes.remove}>
          This Specialization aims to make branding concepts accessible to every
          learner and to teach them to analyze and apply all the relevant
          concepts, using the broad and diverse toolkit of branding. It provides
          you with the necessary tools so that you are able to understand the
          brand behavior, understand the language of a brand and learn about the
          rational and emotional elements behind brands. It also attempts to
          make you understand the language of images. The amount of audiovisual
          content we receive today makes it hard for brands to break through
          that noise. It ends up teaching how to understand branding efforts in
          the context of customer experience.
        </p>
        <p className={classes.remove2}>
          This Specialization aims to make branding concepts accessible to every
          learner and to teach them to analyze and apply all the
          {isShow && (
            <span className={classes.fade}>
              {" "}
              relevant concepts, using the broad and diverse toolkit of
              branding. It provides you with the{" "}
            </span>
          )}
          {isTrue && (
            <span className={classes.appear}>
              {" "}
              relevant concepts, using the broad and diverse toolkit of
              branding. It provides you with the necessary tools so that you are
              able to understand the brand behavior, understand the language of
              a brand and learn about the rational and emotional elements behind
              brands. It also attempts to make you understand the language of
              images. The amount of audiovisual content we receive today makes
              it hard for brands to break through that noise. It ends up
              teaching how to understand branding efforts in the context of
              customer experience.
            </span>
          )}
        </p>
        <div onClick={Istrue} className={classes.showMore}>
          Show {isTrue ?  "less" : "more"}
          <img src={Dropdown2} alt="" />
        </div>
      </section>
      <section className={classes.outline}>
        <h3>COURSE OUTLINE </h3>
        <ul>
          <li>
            <img src={Plus} alt=" " />
            <span>Introduction & Class #1: Launching a New Company</span>
            <span className={classes.remove}>11 lectures</span>
            <span className={classes.remove}>01:03:52</span>
          </li>
          <li>
            <img src={Plus} alt=" " />
            <span>Introduction & Class #1: Launching a New Company</span>
            <span className={classes.remove}>11 lectures</span>
            <span className={classes.remove}>01:03:52</span>
          </li>
          <li>
            <img src={Plus} alt=" " />
            <span>Introduction & Class #1: Launching a New Company</span>
            <span className={classes.remove}>11 lectures</span>
            <span className={classes.remove}>01:03:52</span>
          </li>
          <li>
            <img src={Plus} alt=" " />
            <span>Introduction & Class #1: Launching a New Company</span>
            <span className={classes.remove}>11 lectures</span>
            <span className={classes.remove}>01:03:52</span>
          </li>
          <li>
            <img src={Plus} alt=" " />
            <span>Introduction & Class #1: Launching a New Company</span>
            <span className={classes.remove}>11 lectures</span>
            <span className={classes.remove}>01:03:52</span>
          </li>
          <li>
            <img src={Plus} alt=" " />
            <span>Introduction & Class #1: Launching a New Company</span>
            <span className={classes.remove}>11 lectures</span>
            <span className={classes.remove}>01:03:52</span>
          </li>
        </ul>
      </section>
      <section className={classes.feedback}>
        <h3>STUDENT FEEDBACK</h3>
        <div className={classes.star4}>
          <span className={classes.bigText}>4.0</span>
          <div className={classes.starReview}>
            <img src={Stars} alt="stars" />
            <span className={classes.smallText}>24 reviews</span>
          </div>
        </div>
        <div className={classes.reviewBox}>
          <span>5 stars</span>
          <div className={classes.mainDiv}>
            <div className={classes.subDiv} style={{ width: "50%" }}></div>
          </div>
          <span>50%</span>
        </div>
        <div className={classes.reviewBox}>
          <span>5 stars</span>
          <div className={classes.mainDiv}>
            <div className={classes.subDiv} style={{ width: "72%" }}></div>
          </div>
          <span>72%</span>
        </div>
        <div className={classes.reviewBox}>
          <span>5 stars</span>
          <div className={classes.mainDiv}>
            <div className={classes.subDiv} style={{ width: "12%" }}></div>
          </div>
          <span>12%</span>
        </div>
        <div className={classes.reviewBox}>
          <span>5 stars</span>
          <div className={classes.mainDiv}>
            <div className={classes.subDiv} style={{ width: "2%" }}></div>
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
            <p>
              2 weeks ago <br />
              Jessy Ndendzi
            </p>
          </div>
          <div className={classes.rightContent}>
            <img src={Stars} alt="" />
            <p>
              Very insightful course. It helps to have a better understanding of
              key elements related to the birth and growth of a company. Thanks
              Chris.
            </p>
          </div>
        </div>
        <div className={classes.allContent}>
          <div className={classes.leftContent}>
            <div className={classes.h4Box}>
              <h4>JN</h4>
            </div>
            <p>
              2 weeks ago <br />
              Jessy Ndendzi
            </p>
          </div>
          <div className={classes.rightContent}>
            <img src={Stars3} alt="" />
            <p>
              Very insightful course. It helps to have a better understanding of
              key elements related to the birth and growth of a company. Thanks
              Chris.
            </p>
          </div>
        </div>
        <div className={classes.allContent}>
          <div className={classes.leftContent}>
            <div className={classes.h4Box}>
              <h4>JN</h4>
            </div>
            <p>
              2 weeks ago <br />
              Jessy Ndendzi
            </p>
          </div>
          <div className={classes.rightContent}>
            <img src={Stars3} alt="" />
            <p>
              Very insightful course. It helps to have a better understanding of
              key elements related to the birth and growth of a company. Thanks
              Chris.
            </p>
          </div>
        </div>
      </section>
      <div className={classes.comment}>
        <div className={classes.spacing}>
          <span className={classes.text}>Comment</span>
          <div className={classes.divSpans}>
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
  );
};

export default Preview;
