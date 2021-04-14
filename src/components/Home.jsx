import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';
import Footer from './../components/Footer';

const Home = () => {
  return (

    <div className="Home">
      <img class="image-home" src="./images/LogoWeb.png" alt="nhua" />
      <Footer/>
    </div>


  );
};
export default Home;
