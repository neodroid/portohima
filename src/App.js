import Navbar from "./component/Navbar"
import Footer from "./component/Foot"
import HomeContent from "./component/HomeContent"
import "./App.css";
import React from "react";
import HomeBanner from "./component/HomeBanner"

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