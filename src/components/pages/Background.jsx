import React from "react";
import imgbg from "../../assets/background-pic.png";

import Header from "../Header";
import Footer from "./Footer";
import Backtestmonial from "./reusableComponent/Backtestmonial";

export default function Background() {
  return (
    <>
    <Header/>
  
    <Backtestmonial 
      imgs={imgbg}
      title="background"

    />
    <Backtestmonial 
      imgs={imgbg}
      title="mission"

    />
    <Footer/>
    </>
  );
}
