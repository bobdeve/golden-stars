import React from "react";
import img1 from "../../assets/img1.jpg";
import imggirl from "../../assets/girl-landing.jpg";
import Header from "../Header";
import Footer from "../pages/Footer";
import "./FindYourPro.css";

export default function FindYourPro() {
  return (
    <>
      <Header />

      <div id="find-your-pro">
        <div className="find-your-pro-title">
          <h1>Unleash Your Potential</h1>
          <h4>
            Choose from a range of majors and programs that will have you
            career-ready from day one. There’s a reason Alverno graduates stand
            out from the crowd.
          </h4>
        </div>
        <div className="program-list-container">
          <div className="program-list">
            <img src={img1} alt="Our program picture" />
            <h3>Social work certificate</h3>
            <ul>
              <li>Certificate/License</li>
            </ul>
          </div>
          <div className="program-list">
            <img src={img1} alt="Our program picture" />
            <h3>Social work certificate</h3>
            <ul>
              <li>Certificate/License</li>
            </ul>
          </div>
          <div className="program-list">
            <img src={img1} alt="Our program picture" />
            <h3>Social work certificate</h3>
            <ul>
              <li>Certificate/License</li>
            </ul>
          </div>
          <div className="program-list">
            <img src={img1} alt="Our program picture" />
            <h3>Social work certificate</h3>
            <ul>
              <li>Certificate/License</li>
            </ul>
          </div>
          <div className="program-list">
            <img src={img1} alt="Our program picture" />
            <h3>Social work certificate</h3>
            <ul>
              <li>Certificate/License</li>
            </ul>
          </div>
        </div>
        <div className="map-container">

       
        <img className="img-girl" src={imggirl} alt="" />
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.8915530058623!2d38.491205!3d7.0347596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b14f7b6c655833%3A0x92412f12c0ebd499!2s2FMR%2BVGF%2C%20Town!5e0!3m2!1sen!2set!4v1715687475935!5m2!1sen!2set"
        width="600"
        height="450"
        className="google-map"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
       </div>
      </div>
       
      
      
      <Footer />
    </>
  );
}
