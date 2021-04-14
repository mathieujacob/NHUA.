import Navmain from "./components/NavMain.jsx"
import NavMobile from "./components/NavMobile.jsx"
import Home from "./components/Home.jsx"
import AboutUs from "./pages/AboutUs.jsx"
import Archive from "./pages/Archives.jsx"
import Contact from "./pages/Contact.jsx"
import Slave from "./pages/Slave.jsx"
import Footer from "./components/Footer"
import './App.css';
import React from "react";
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <div class="up"> <img class="Color-palette" src="./images/ColorSchem.png" alt="nhua" /></div>
      <header>
     
      <Navmain/>
      <NavMobile/>
      </header>
      <div>
      <Route exact path="/" component={Home} />
      </div>
      <Switch>
      <Route exact path="/Archive" component={Archive} />
      <Route exact path="/About" component={AboutUs} />
      <Route exact path="/Contact" component={Contact} />
      </Switch>
      <div>
      <Route exact path="/Archive/Slave" component={Slave} />
      </div>
     <Footer/>
   
    </div>
  );
}

export default App;
