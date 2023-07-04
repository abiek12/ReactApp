import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Spotify_Logo.png";
import "../pages/Home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="navbar">
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
            <Link to="/Sign">Sign up</Link>
            <Link to="/Login">Log in</Link>
          </div>
        </div>
        <div className="hero">
          <h1 className="h1">Music for everyone.</h1>
          <h6 className="h2">Millions of songs. No credit card needed.</h6>
          <Link to="/Sign">
            <button type="button">GET SPOTIFY FREE</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
