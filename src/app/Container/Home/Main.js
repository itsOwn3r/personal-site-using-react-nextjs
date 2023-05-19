import React from "react";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import './Main.css'
const Main = (props) => {
 return <div className="home-container">
  <Header />
    <Profile id={props.id || ""}/>
    <Footer />
  </div>;
};

export default Main;
