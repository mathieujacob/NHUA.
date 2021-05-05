import Navmain from "./components/NavMain.jsx";
import NavMobile from "./components/NavMobile.jsx";
import Home from "./components/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Archive from "./pages/Archives.jsx";
import Contact from "./pages/Contact.jsx";
import Slave from "./pages/Slave.jsx";
import FlowerBloom from "./pages/FlowerBloom.jsx";
import FrenchFlow from "./pages/FrenchFlow.jsx";
import Footer from "./components/Footer";
import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext.tsx";
import DarkMode from "./components/DarkMode";

function App() {
  return (
    <div>
      <ThemeProvider>
        <DarkMode />
      </ThemeProvider>
      <header>
        <Navmain />
        <NavMobile />
      </header>
      <div>
        <Route exact path="/" component={Home} />
      </div>
      <Switch>
        <Route exact path="/Archive" component={Archive} />
        <Route exact path="/About" component={AboutUs} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Archive/Slave" component={Slave} />
        <Route exact path="/Archive/FlowerBloom" component={FlowerBloom} />
        <Route exact path="/Archive/FrenchFlow" component={FrenchFlow} />
      </Switch>

      <div></div>

      <Footer/>
    </div>
  );
}

export default App;
