import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Services from "./components/service";
import Contact from "./components/contact";
import MyTeam from "./components/myteam";
import ClassDetails from "./components/classes";
import SignIn from './components/login';
function App() {
 
  return (
    <>
      <Router>
            <Navbar  />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/team" element={<MyTeam />} />
              <Route path="/classes" element={<ClassDetails />} />
              <Route path='/login' element={<SignIn/>}/>
            </Routes>
            <Footer />
          
      </Router>
    </>
  )
}


export default App;


  