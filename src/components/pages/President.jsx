import "./President.css";
import presi1 from "../../assets/president1.jpg";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faQuoteLeft,
  faQuoteRight,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";
import Dots from "./Dots";

function President() {
  return (
    <>
      <div className="main-president">
        <FontAwesomeIcon className="quote-top" icon={faQuoteLeft} />
        <div className="presdient-img">
          <img src={presi1} alt="picture of the college president" />
        </div>

        <div className="president-dis">
          <h3>
            Success is not just about winning for yourself; it is also about
            helping others achieve their goals, says the visionary leader and
            founder and CEO of Golden Stars College. True success is achieved
            by empowering others. With vast experience in national and
            international charities, she blends compassion with business savvy
            to shape brighter futures.
          </h3>
          <h2>-Yohana Reta</h2>
          <h5>(founder and CEO of Golden stars college)</h5>
        </div>
        <FontAwesomeIcon className="quote-bottom" icon={faQuoteRight} />
      </div>
      <Dots />
    </>
  );
}

export default President;
