import React from "react";
import Header from "../Header";
import Footer from "./Footer";

export default function About() {
  return (
    <>
      <Header />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xYjCIe3grGM?si=-5oItsnOmT72qIDN"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <Footer />
    </>
  );
}
