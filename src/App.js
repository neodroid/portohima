import Navbar from "./component/Navbar"
import Footer from "./component/Foot"
import "./App.css";
import React from "react";
import HomeBanner from "./component/HomeBanner"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <HomeBanner />
      <Footer />
    </div>
  );
}

export default App;