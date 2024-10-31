import React, { useEffect, useState } from "react";

import "./Landing.css";


import bgwhitearrow from "../../assets/bg_white.png";
import bgsmallwhitearrow from "../../assets/bgarrow.png";
import { FaGlobe, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHandshake,
  faLightbulb,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import useFetchData from "./useFetchData";
import Loading from "./Loading";

const Slideshow = () => {
  const { data, loading, error } = useFetchData("golden");
  const isDataAvailable = data.length > 0;
  if (loading) {
    return (<Loading/>);
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
 console.log(data);
  return (
    <div className="main-landing">
      <img className="img-arrow" src={bgsmallwhitearrow} alt="Arrow background" />
      <div className="landing-container">
        {isDataAvailable && <img src={data[0].landingpic} alt="Landing Pic" />}
        <div className="landing-grid-container">
          <div className="sub-grid">
            <div className="landing-grid-item-l">
              <FontAwesomeIcon className="icon-landing" icon={faHandshake} />
              <h2 className="icon-text">Uplifting</h2>
            </div>

            <div className="landing-grid-item">
              <FontAwesomeIcon className="icon-landing" icon={faLightbulb} />{" "}
              <h2 className="icon-text">Innovative</h2>
            </div>
          </div>
          <div className="sub-grid">
            <div className="landing-grid-item">
              <FaGlobe className="icon-landing" />{" "}
              <h2 className="icon-text">International</h2>
            </div>
            <div className="landing-grid-item-l">
              <FontAwesomeIcon className="icon-landing" icon={faHouse} />{" "}
              <h2 className="icon-text">Community</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="img-arrow1" src={bgsmallwhitearrow} alt="Arrow background" /> */}
    </div>
  );
};

export default Slideshow;
