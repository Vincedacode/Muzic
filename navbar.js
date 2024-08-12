import React from "react";
import "./navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/about";
import Features from "./Pages/features";
import Contact from "./Pages/contact";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
function Navbar() {
  return (
    <Router>
    <nav className="navbar">
      <div className="logo">Muzic</div>
      <ul className="nav-links">
        <li className="nav-item">
          <Link className="link-style" to = "/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="link-style" to= "/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="link-style" to= "/features">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="link-style" to= "/contact">Contact</Link>
        </li>
      </ul>
      <div className="sign-up">
    
        <Link to="/login">  <i style={{color: "blue", backgroundColor: "white", borderRadius: "50%", height: "35px", width: "35px", alignContent: "center", marginRight: "20px" }} className="fa-solid fa-lock "></i></Link>
      
       <button style={{borderRadius: "20px 0px 0px 20px", fontSize: "bold", paddingInline: "30px"}} className="btn btn-light btn-rounded text-primary f-bold ">
        <Link style={{textDecoration: "none"}} to="/signup">Sign Up</Link>
       </button>
      </div>
    </nav>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/features" element = {<Features/>}/>
      <Route path="/contact" element = {<Contact/>}/>
      <Route path="/login" element = {<Login/>}/>
      <Route path="/signup" element = {<Signup/>}/>
    </Routes>
    </Router>
  );
}

export default Navbar;
