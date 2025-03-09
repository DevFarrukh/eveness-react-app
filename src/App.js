import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import LandingPage from "./pages/LandingPage";
import QuizPage from "./pages/QuizPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
  </Router>
  );
}

export default App;
