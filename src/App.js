import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import BookTrip from "./components/BookTrip";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import decore from "./resources/Decore.png"
import dots from "./resources/dots.jpg"
import c1 from "./resources/c1.png"
import c2 from "./resources/c2.png"
import c3 from "./resources/c3.png"
import c4 from "./resources/c4.png"
import c5 from "./resources/c5.png"
import tg from "./resources/tg.png"

function App() {
  return (
    <div className="w-[90%] mt-5 mx-auto relative z-10">
      <Navbar className="nav"/>
      <img src={decore} className="absolute -z-10 -top-5 -right-20"/>
      <br/><br/><br/>
      <Hero/>
      <br/><br/><br/>
      <br/><br/><br/><br/>
      <Services/>
      <img src={dots} className="absolute w-40 -z-10 top-100 top-[850px] -right-16"/>
      <br/><br/><br/>
      <Destinations/>
      <br/><br/><br/>
      <BookTrip/>
      <br/><br/><br/>
      <Testimonials/>
      <br/><br/><br/>
      <div className="flex justify-between items-center">
        <img src={c1} className="hover:scale-125 hover:transition-transform"/>
        <img src={c2} className="hover:scale-125 hover:transition-transform"/>
        <img src={c3} className="hover:scale-125 hover:transition-transform"/>
        <img src={c4} className="hover:scale-125 hover:transition-transform"/>
        <img src={c5} className="hover:scale-125 hover:transition-transform"/>
      </div>
      <br/><br/><br/>
      <img src={tg} className="absolute right-0"/>
      <Contact/>
      <img src={dots} className="absolute  w-40 -z-10 -right-10 bottom-40"/>
      <br/><br/><br/>
      <Footer/>
    </div>
  );
}

export default App;
