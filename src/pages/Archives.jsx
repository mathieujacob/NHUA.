import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Footer from "./../components/Footer";

const Archives = () => {
  return (
    <div >
         <hr></hr>
      <div>
      <p class="title"> Cover</p> 
      <div class="archive-main2">
     <a href="/Archive/slave"><img class="image-archive" src="./images/SlaveToMyThoughtsCover.jpg" alt="nhua" /></a>
     <a href="/Archive/flowerbloom"><img class="image-archive" src="./images/FlowerBloomCover.jpg" alt="nhua" /></a>
     <a href="/Archive/frenchflow"><img class="image-archive" src="./images/FrenchFlowCover.jpg" alt="nhua" /></a>
      </div>
      </div>
      <hr></hr>
    <p class="title"> Research</p>     
    <div class="archive-main">
      <img class="image-archive" src="./images/graphic.jpeg" alt="nhua" />
      <img class="image-archive" src="./images/Graphic2.jpg" alt="nhua" />
      <img class="image-archive" src="./images/Graphic3.jpg" alt="nhua" />
      <img class="image-archive" src="./images/Graphic4.jpg" alt="nhua" />
      <img class="image-archive" src="./images/Graphic5.jpg" alt="nhua" />
      <img class="image-archive" src="./images/Graphic6.jpg" alt="nhua" />
      <img class="image-archive" src="./images/Graphic7.jpg" alt="nhua" />
      <img class="image-archive" src="./images/Graphic8.jpg" alt="nhua" />
      <img class="image-archive" src="./images/Graphic9.jpg" alt="nhua" />
      <img class="image-archive" src="./images/Graphic11.jpg" alt="nhua" />
      <img class="image-archive" src="./images/Graphic13.jpg" alt="nhua" />
      <img class="image-archive" src="./images/Graphic14.jpg" alt="nhua" />
      <div>

      </div>
    </div>
    </div>
  );
};
export default Archives;
