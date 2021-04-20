import React from "react";
import "../App.css";
import "../carousel.css";
import { Link } from "react-router-dom";
import Footer from "./../components/Footer";

const FlowerBloom = () => {
  return (
    <div>
      <hr></hr>
      <div class="main-slave">
        <br></br>
        <h3>Flower Bloom Design Process</h3>
      </div>
      <div class="container x-scroll x-mandatory">
        <div class="wrapper">
          <div class="element">
            {" "}
            <img
              class="image-slave"
              src="/images/FlowerBloomCover.jpg"
              alt="nhua"
            />
          </div>
          <div class="element">
            <img
              class="image-slave"
              src="/images/FlowerBloomCover2.jpg"
              alt="nhua"
            />
          </div>
          <div class="element">
            <img
              class="image-slave"
              src="/images/stickersSingle2.png"
              alt="nhua"
            />
          </div>
          <div class="element">
            <img
              class="image-slave"
              src="/images/stickersSingle3.png"
              alt="nhua"
            />
          </div>
        </div>
      </div>
      <p class="credit-carouselle">Designed by Dan The Island</p>
      <Footer />
    </div>
  );
};
export default FlowerBloom;
