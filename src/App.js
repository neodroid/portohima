import Navbar from "./component/Navbar"
import Footer from "./component/Foot"
import HomeContent from "./component/HomeContent"
import "./App.css";
import React from "react";
import HomeBanner from "./component/HomeBanner"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <HomeBanner />
      <HomeContent />
      <Footer />
    </div>
  );
}

export default App;