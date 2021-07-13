import './App.css';
import Landing from "./pages/landing/landing"
import Signin from "./pages/Auth/signin"
import Signup from "./pages/Auth/signup"
import AboutUs from "./pages/AboutUs/aboutus"
import AllCourse from "./pages/allCourse/allCourse"
import Preview from './pages/preview/preview'
import StudentDashboard from './pages/studentDashboard/studentDashboard';
import ViewProfile from "./pages/profile/viewProfile"
import AccountSettings from "./pages/profile/accountSettings"
import OngoingCourse from "./pages/ongoingCourses/ongoingCourse"
import Error404 from "./pages/404/error404"
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
        <Route path="/profile" exact component={ViewProfile} />
        <Route path="/account" exact component={AccountSettings} />
        <Route path="/my-courses" exact component={OngoingCourse} />
        <Route path="/" exact component={Landing} />
        <Route path="/*" component={Error404} />

      </Switch>
    </div>
  );
}

export default App;
