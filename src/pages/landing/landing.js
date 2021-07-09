import { useEffect } from "react";
import './landing.css';
import Home from './components/home/home';
import Browse from './components/browseCourses/browseCourses';
import Utilize from './components/utilizing/utilizing';
import Build from './components/build/build';
import Students from './components/students/students';
import Partners from './components/partners/partners';
import Footer from "../footer/footer";


const Landing = ()=> {
  useEffect(() => {
    window.scrollTo(0, 0);
  });


  return (
    <div>
      <Home />
      <Browse/>
      <Utilize/>
      <Build />
      <Students />
      <Partners />
      <Footer />
    </div>
  );
}

export default Landing;
