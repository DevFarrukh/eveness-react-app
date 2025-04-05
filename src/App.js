import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import LandingPage from "./pages/LandingPage";
import QuizPage from "./pages/QuizPage";
import QuizPage2 from "./pages/QuizPage2";
import QuizPage3 from "./pages/QuizPage3";
import Shop from "./pages/Shop";
import FacePage from "./pages/FacePage";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import ProductDescription from "./pages/ProductDescription";
import Cart from "./pages/Cart";
import Colors from "./pages/Colors";
import Body from "./pages/Body";
import Account from "./pages/Account";
import Profile from './pages/Profile';


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
        <Route path="/quiz2" element={<QuizPage2 />} />
        <Route path="/quiz3" element={<QuizPage3 />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/face" element={<FacePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/product-description" element={<ProductDescription />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/body" element={<Body />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/profile" element={<Profile />} />
     
      </Routes>
    </Router>
  );
}

export default App;
