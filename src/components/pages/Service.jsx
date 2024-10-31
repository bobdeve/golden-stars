import React, { useState } from "react";
import "./Service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Header";
import { Link } from "react-router-dom";
import { servicesData } from "./servicesData";

const Service = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const showDisc = (index) => {
    setExpandedIndex(prevIndex => prevIndex === index ? null : index);
  };
console.log("bob")
  return (
    <>
      <Header />
      <div id="main-service">
        <div className="services">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className={`service-container-main ${expandedIndex === index ? "expanded" : ""}`}
            >
              <Link 
                className="service-container" 
                exact="true"  
                target="_blank" 
                to={`/service-disc?eventId=${servicesData[index].id}`}
              >
                <div className="service-list">
                  <FontAwesomeIcon className="service-icon" icon={service.icon} />
                </div>
                <div className="services-disc">
                  <h2 className="service-title">{service.title}</h2>
                  <p className="service-disc">
                    {expandedIndex === index ? <span>{service.fulldescription}</span> : <span>{service.description}</span>}
                  </p>
                </div>
              </Link>
              <span onClick={() => showDisc(index)} className="service-learnmore">
                {expandedIndex === index ? "Show less" : "Learn more"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
