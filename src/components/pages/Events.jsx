import './Event.css'
import React from 'react';
import  img1 from '../../assets/img1.jpg';
import  grade from '../../assets/grad15.jpg';
import  grade2 from '../../assets/grad2.jpg';
import  blo from '../../assets/blood1.jpg';
import  mom from '../../assets/mom1.jpg';


function Events() {
    const eventsData = [
        {
          id: 1,
          img: grade,
          title: "Graduation day with honorable ones  ",
          description: "Amazing graduation ceremony with distinguished guest Dagmawi , who is inspiration person for many",
          date: "21",
          month: "January, 2022"
        },
        // Add more event data as needed
        {
          id: 1,
          img: blo,
          title: "Blood Donation Day",
          description: "We are willing to do everything for the community ",
          date: "15",
          month: "March, 2022"
        },
        // Add more event data as needed
        {
          id: 1,
          img: grade2,
          title: "Rewarding those who have contributed and worked hard ",
          description: "Golden stars college respect and honors those who are committed to change the community",
          date: "9",
          month: "September, 2023"
        },
        // Add more event data as needed
     
      ];
      
      return (
        <>
        <h1 className='event-title'>Golden Stars Today</h1>
        <div id='event-container'>
          {eventsData.map(event => (
            <div className='event-container' key={event.id}>
           
              <div className='event'>
                <img className='event-pic' src={event.img} alt="image of event" />
                 <div className='event-info'>
                    <h1>{event.date}</h1>
                    <h4>{event.month}</h4>
                 </div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <button>learn more</button>
              </div>
            </div>
          ))}
        </div>
        </>
      );
    }

export default Events;