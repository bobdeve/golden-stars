import React, { useState, useEffect } from 'react';
import './Numerics.css';
import Dots from './Dots';

const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationInterval;

    const handleScroll = () => {
      const element = document.querySelector('.numeric-container');
      if (element) {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight) {
          const animationDuration = 1000; // milliseconds
          const interval = Math.max(50, Math.floor(animationDuration / end)); // Adjust interval based on end value
          let currentCount = 0;

          animationInterval = setInterval(() => {
            currentCount += 1;
            setCount(currentCount);
            if (currentCount === end) {
              clearInterval(animationInterval);
            }
          }, interval);

          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(animationInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [end]);

  return <h1>{count}%</h1>;
};

export default function Numerics() {
  return (
    <>
      <h1 className='numberics-title'>Golden Standard</h1>

      <div className='numeric-container'>
        <div className='numeric'>
          <Counter end={100} />
          <h4>of alums surveyed feel prepared for career expectations</h4>
        </div>
        <div className='numeric'>
          <Counter end={94} />
          <h4>of alums are proud to be the part of our college</h4>
        </div>
        <div className='numeric'>
          <Counter end={88} />
          <h4>of alums surveyed feel they gained enough knowledge and skill to tackle real life problems</h4>
        </div>
        <div className='numeric'>
          <Counter end={98} />
          <h4>of alums surveyed gave there consent to give back to the community</h4>
        </div>
      </div>
      <Dots/>
    </>
  );
}
