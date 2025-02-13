import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Services from "./components/service";
import Contact from "./components/contact";
import MyTeam from "./components/myteam";
import ClassDetails from "./components/classes";
import SignIn from './components/login';
import GymAppointmentBooking from './components/appoinment';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem("userData"))
  );

  useEffect(() => {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setUser(userData);
    }
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("userData");
    setIsAuthenticated(false); // Update the state
  };

  // Function to handle login (optional for SignIn integration)
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      {isAuthenticated ? (
        <>
          <Navbar onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<MyTeam />} />
            <Route path="/classes" element={<ClassDetails />} />
            <Route path="/bookapointment" element={<GymAppointmentBooking/>}/>
            <Route path="/login" element={<SignIn />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <Routes>
          
          <Route path="/login" element={<SignIn onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/login" />} /> {/* Redirect to login */}
        </Routes>
      )}
    </Router>
  );
}

export default App;
