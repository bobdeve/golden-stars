import React from "react";
import "./Gallery.css";
import Header from "../Header";
import Footer from "./Footer";
import useFetchData from "./useFetchData";
import Loading from "./Loading";
import { motion } from 'framer-motion';

export default function Gallery() {
  // Function to generate random classes for image heights
  const getRandomClass = () => {
    const classes = ["wide", "tall", "big"]; // Define classes for different heights
    return classes[Math.floor(Math.random() * classes.length)]; // Choose a random class
  };

  // Object to store specific image name descriptions
  const specificImageDescriptions = {
    "BnqMTY.jpg": "Woman and mother empowerment celebration with community",
    "5rnu30.jpg": "Woman and mother empowerment celebration with community",
    "TgZ1CP.jpg": "Woman and mother empowerment celebration with community",
    "rGuDtr.jpg": "Woman and mother empowerment celebration with community",
    "NRDZa9.jpg": "Woman and mother empowerment celebration with community",
    "X09u0s.jpg": "Woman and mother empowerment celebration with community",
    "Id149I.jpg": "Woman and mother empowerment celebration with community",
    "bRmqr0.jpg": "Woman and mother empowerment celebration with community",
    "OjtoBW.jpg": "Woman and mother empowerment celebration with community",
    "YkO5VA.jpg": "Cultural day celebration with diverse and beautiful community all around the country",
    "woeHiQ.jpg": "Cultural day celebration with diverse and beautiful community all around the country",
    "o4xlzi.jpg": "Cultural day celebration with diverse and beautiful community all around the country",
    "bzWWzs.jpg": "Cultural day celebration with diverse and beautiful community all around the country",
    "0vuTsX.jpg": "Cultural day celebration with diverse and beautiful community all around the country",
    "XmZAWa.jpg": "Cultural day celebration with diverse and beautiful community all around the country",
    "SO1ryg.jpg": "Cultural day celebration with diverse and beautiful community all around the country",
    "zwPhQh.jpg": "Cultural day celebration with diverse and beautiful community all around the country",
    "YITXEb.jpg": "Female police empowerment and collaboration day",
    "MZqCMx.jpg": "Female police empowerment and collaboration day",
    "g0djhh.jpg": "Female police empowerment and collaboration day",
    "YEAWEe.jpg": "Female police empowerment and collaboration day",
    "7aWW6T.jpg": "Female police empowerment and collaboration day",
    "3LTGDL.jpg": "Female police empowerment and collaboration day",
    "YxyDGe.jpg": "Female police empowerment and collaboration day",
    "zwclII.jpg": "Female police empowerment and collaboration day",
    "kONsZu.jpg": "Female police empowerment and collaboration day",
    "nqcLXj.jpg": "Female police empowerment and collaboration day",
    "Ifo8g2.jpg": "Female police empowerment and collaboration day",
    "4x8zZ9.jpg": "Graduation ceremony and certification program with our amazing students",
    "jEcyrb.jpg": "Graduation ceremony and certification program with our amazing students",
    "OBE9hQ.jpg": "Graduation ceremony and certification program with our amazing students",
    "L25D0m.jpg": "Graduation ceremony and certification program with our amazing students",
    "qWJXap.jpg": "Graduation ceremony and certification program with our amazing students",
    "dmzoTc.jpg": "Graduation ceremony and certification program with our amazing students",
    "zyGVHw.jpg": "Graduation ceremony and certification program with our amazing students",
    "kQM2fI.jpg": "Graduation ceremony and certification program with our amazing students",
    "bxl7mm.jpg": "Graduation ceremony and certification program with our amazing students",
    "wtzJA3.jpg": "Graduation ceremony and certification program with our amazing students",
    "FiPTD7.jpg": "Graduation ceremony and certification program with our amazing students",
    "yHmYuE.jpg": "Graduation ceremony and certification program with our amazing students",
    "Yns43b.jpg": "Graduation ceremony and certification program with our amazing students",
    "L0MWhM.jpg": "Graduation ceremony and certification program with our amazing students",
    "fUUCyM.jpg": "Graduation ceremony and certification program with our amazing students",
    "dw4CK8.jpg": "Graduation ceremony and certification program with our amazing students",
    "dEcIrO.jpg": "Graduation ceremony and certification program with our amazing students",
    "2VOsAu.jpg": "Graduation ceremony and certification program with our amazing students",
    "CZiOJR.jpg": "Graduation ceremony and certification program with our amazing students",
    "aXUAfv.jpg": "Blood donation day and giving back to the community",
    "ZWTXaV.jpg": "Blood donation day and giving back to the community"
  };

  // Function to generate the appropriate data-text based on the image name
  const getDataText = (imageName) => {
    const name = imageName.split("/").pop(); // Extract the image name from the path
    if (specificImageDescriptions[name]) {
      return specificImageDescriptions[name];
    }  else {
      return "Event description not available"; // Default description
    }
  };

  const { data, loading, error } = useFetchData("mom");
  const isDataAvailable = data.length > 0;
  if (loading) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const arr = Object.values(data[0]);

  return (
    <>
      <Header />
      <motion.div id="main-gallery">
        <div className="grid-wrapper">
          {arr.map((galle, index) => {
            const randomClass = getRandomClass(); // Get a random class for each image
            const dataText = getDataText(galle.split("/").pop()); // Extract image name and get data text
            return (
              <div key={index} className={randomClass} data-text={dataText}>
                <img
                  loading="lazy"
                  className="gallery-img"
                  src={galle}
                  alt={`Image ${index}`}
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
