import React from "react";
import bk1 from "../../assets/bk1.jpg";
import bk2 from "../../assets/bk2.jpg";
import bk3 from "../../assets/bk3.jpg";
import bk4 from "../../assets/bk4.jpg";
import Dots from "./Dots";
import "./Explore.css";

const creativeData = [
  {
    h4: "Discover Your Passion",
    p: "Embark on a journey of self-discovery and find the major that fuels your passion."
  },
  {
    h4: "Ignite Your Potential",
    p: "Unleash your full potential with our diverse range of undergraduate programs designed to ignite creativity and innovation."
  },
  {
    h4: "Forge Your Path",
    p: "Forge your unique path to success with our tailored undergraduate programs, empowering you to carve your own destiny."
  },
  {
    h4: "Shape Your Future",
    p: "Shape your future and make your mark on the world with our comprehensive undergraduate programs focused on excellence and leadership."
  }
];

export default function Explore() {
  let imgs = [bk1, bk2, bk3, bk4];

  return (
    <>
      <Dots />
      <div id="main-explore">
        <h1 className="explore-title">Explore our Programs</h1>
        <div className="main-explore">
          {imgs.map((img, index) => (
            <div className="explore" key={index}>
              <img src={img} alt="picture of student" />
              <h4>{creativeData[index].h4}</h4>
              <p>{creativeData[index].p}</p>
              <button>Learn more</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
