import {
  Switch, 
  Route,
} from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import './App.css';
// import Landing from "./pages/landing/landing";
// import Signin from "./pages/Auth/signin";
// import Signup from "./pages/Auth/signup";
// import AboutUs from "./pages/AboutUs/aboutus";
// import AllCourse from "./pages/allCourse/allCourse";
// import Preview from './pages/preview/preview';
// import StudentDashboard from './pages/studentDashboard/studentDashboard';
// import ViewProfile from "./pages/profile/viewProfile";
// import AccountSettings from "./pages/profile/accountSettings";
// import OngoingCourse from "./pages/ongoingCourses/ongoingCourse";
import Error404 from "./pages/404/error404";
import Loader from "./pages/loader/loader";

// const Signin = lazy(()=>{
//   return import("./pages/Auth/signin");
// });

const Landing = lazy(()=>{
  return import("./pages/landing/landing");
});

const Signin = lazy(()=>{
  return import("./pages/Auth/signin");
});

const Signup = lazy(()=>{
  return import("./pages/Auth/signup");
});

const AboutUs = lazy(()=>{
  return import("./pages/AboutUs/aboutus");
});

const AllCourse = lazy(()=>{
  return import("./pages/allCourse/allCourse");
});

const Preview = lazy(()=>{
  return import("./pages/preview/preview");
});

const StudentDashboard = lazy(()=>{
  return import("./pages/studentDashboard/studentDashboard");
});

const ViewProfile = lazy(()=>{
  return import("./pages/profile/viewProfile");
});

const AccountSettings = lazy(()=>{
  return import("./pages/profile/accountSettings");
});

const OngoingCourse = lazy(()=>{
  return import("./pages/ongoingCourses/ongoingCourse");
});

const App=()=> {

const [show, setShow] = useState(true);

  return (
      <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
}

export default App;
