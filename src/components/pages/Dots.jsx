import React from 'react';
import './Unique.css'
const Dots = () => {
    return (
       <>
      
        <div className="dots-container">
        {[...Array(4)].map((_, index) => (
          <span key={index} className="dot"></span>
        ))}
      </div>
        <div className="dots-container1">
        {[...Array(12)].map((_, index) => (
          <span key={index} className="dot1"></span>
        ))}
      </div>
        {/* <div className="dots-container2">
        {[...Array(2)].map((_, index) => (
          <span key={index} className="dot2"></span>
        ))}
      </div> */}

      </>
    );
};

export default Dots;