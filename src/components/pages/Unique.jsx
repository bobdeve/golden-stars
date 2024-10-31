import React from "react";
import pro1 from "../../assets/bk1.jpg";
import "./Unique.css";
import Dots from "./Dots";

function Unique() {
  return (
    <>
      <Dots />
      <div className="main-unique">
        <div className="unique-disc">
          <h1 className="unique-title">Our Unique Features</h1>
         
          <p>
            Golden Stars College is renowned for its commitment to personalized
            learning, hands-on experiential curriculum, diverse community,
            innovation focus, expert faculty, and comprehensive career support
            services, ensuring students receive a well-rounded education and
            preparation for successful futures.
          </p>
          <button>Our Abilities in Action</button>
        </div>
        <div className="unique-img">
          <img src={pro1} alt="picture of Yohana" />
        </div>
      </div>
      <Dots />
    </>
  );
}

export default Unique;
