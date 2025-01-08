 
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Services from "./components/service";
import Contact from "./components/contact";
function App() {
 
  return (
    <>
      <BrowserRouter>
            <Navbar  />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          
      </BrowserRouter>
    </>
  )
}


export default App;


  