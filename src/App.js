import './App.css';
import Landing from "./pages/landing/landing"
import Signin from "./pages/Auth/signin"
import Signup from "./pages/Auth/signup"
import AboutUs from "./pages/AboutUs/aboutus"
import AllCourse from "./pages/allCourse/allCourse"
import Preview from './pages/preview/preview'
import SingleCourse from "./pages/singleCourse/singleCourse"
import StudentDashboard from './pages/studentDashboard/studentDashboard';
import ViewProfile from "./pages/profile/viewProfile"
import AccountSettings from "./pages/profile/accountSettings"

import {
  Switch, 
  Route,
  useParams,
  Redirect,
} from "react-router-dom"



function App() {
  return (
    <div>
      <Switch>
        <Route path="/sign-up" exact component={Signup} />
        <Route path="/sign-in" exact component={Signin} />
        <Route path="/dashboard" exact component={StudentDashboard} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/all-courses" exact component={AllCourse} />
        <Route path="/course-preview" exact component={Preview} /> 
        <Route path="/single-course-page" exact component={SingleCourse} />
        <Route path="/profile" exact component={ViewProfile} />
        <Route path="/account" exact component={AccountSettings} />
        <Route path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
