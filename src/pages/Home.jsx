import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Spotify_Logo.png";
import "../pages/Home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="head">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Spotify_Logo" />
            </Link>
          </div>
          <div className="nav">
            <Link to="/Premium">Premium</Link>
            <Link to="/Help">Help</Link>
            <Link to="/Download">Download</Link>
            <Link>|</Link>
            <Link to="/Sign">Sign Up</Link>
            <Link to="/Login">Log In</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
