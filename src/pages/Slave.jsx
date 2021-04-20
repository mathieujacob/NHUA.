import React from "react";
import "../App.css";
import "../carouselle.css"
import { Link } from "react-router-dom";
import Footer from "./../components/Footer";

const Slave = () => {
  return (
      <div>
       <hr></hr>
       <div class="main-slave">  
       <br></br>
       <h3>Slave To My Thoughts Design Process</h3>
       </div>
       <div class="container x-scroll x-mandatory">
    <div class="wrapper">
      <div class="element"> <img class="image-slave" src="/images/SlaveToMyThoughtsCover.jpg" alt="nhua" />
</div>
<div class="element"><img class="image-slave-vhs" src="/images/slaveVhs.jpg" alt="nhua" /></div>

      <div class="element"><img class="image-slave-affiche" src="/images/slaveAffiche.jpg" alt="nhua" /></div>
      <div class="element"><img class="image-slave" src="/images/slavediapo.jpg" alt="nhua" /></div>
    </div>

  </div>
  <p class="credit-carouselle">Designed by Dan The Island</p>
   <Footer/>

    </div>
  );
};
export default Slave;
