import { useEffect } from "react";
import Header from "../header/header2/header2B";
import Footer from "../footer/footer2";
import { Link } from "react-router-dom";
import classes from "./accountSettings.module.css";
import Edit from "./images/edit.svg";

const AccountSettings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div style={{ background: "#f9f9f9" }}>
      <Header />

      <div className={classes.mainBox}>
        <aside>
          <h2>SETTINGS</h2>
          <ul>
            <li>
              <Link to="/profile" className={classes.profileLink}>
                View Profile
              </Link>
            </li>
            <li className={classes.profileLink}>Account</li>
            <li className={classes.profileLink}>Payment History</li>
            <li className={classes.profileLink}>Notification</li>
          </ul>
        </aside>
        <div className={classes.profileDiv}>
          <h3>Account</h3>
          <form>
            <label>Email Address</label> <br />
            <div className={classes.formDiv}>
              <input placeholder="Email Address" type="email" required />
              <span>
                <img src={Edit} alt="" />
              </span>
            </div>
            <br />
            <label>Password</label>
            <br />
            <input
              placeholder="........ "
              type="email"
              className={classes.inputField1}
            />{" "}
            <br />
            <input
              placeholder="Enter new password"
              type="email"
              className={classes.inputField}
            />{" "}
            <br />
            <input
              placeholder="Re-enter password"
              type="email"
              className={classes.inputField}
            />{" "}
            <br />
            <br />
            <button>Save changes</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AccountSettings;
