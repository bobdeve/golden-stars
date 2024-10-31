import React, { useState } from "react"; // Importing React and useState hook
import "./EventTab.css"; // Importing CSS file for styling
import Header from "../Header"; // Importing Header component
import img1 from "../../assets/img1.jpg"; // Importing images
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import {events} from "../pages/event.js"
import Footer from "./Footer.jsx";

export default function EventTab() { // Defining EventTab functional component
  const [date, setDate] = useState(new Date()); // State variable to store current date



  const month = date.toLocaleString("default", { month: "long" }); // Extracting current month
  const year = date.getFullYear(); // Extracting current year
  const hasEvents = events[year]&& events[year][month]? true: false
  


  console.log(events[year])
  const daysInMonth = new Date(year, date.getMonth() + 1, 0).getDate(); // Calculating total days in current month
  const firstDayOfMonth = new Date(year, date.getMonth(), 1).getDay(); // Calculating the day of the week for the first day of the month

  const renderDaysOfWeek = () => { // Function to render days of the week (Sun, Mon, ..., Sat)
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => ( // Mapping each day of the week to a div element
      <div key={day} className="day"> 
        {day}
      </div>
    ));
  };

  const renderEmptyDays = () => { // Function to render empty days before the start of the month
    return [...Array(firstDayOfMonth).keys()].map((index) => ( // Mapping empty days to div elements
      <div key={`empty-${index}`} className="empty-day"></div>
    ));
  };

  const renderDaysOfMonth = () => { // Function to render days of the current month
    const today = new Date().getDate(); // Getting current day of the month
    const holidays = getHolidaysForMonth(date.getMonth(), year); // Getting holidays for current month
    const events = getEventsForMonth(date.getMonth(), year); // Getting events for current month

    return [...Array(daysInMonth).keys()].map((index) => { // Mapping each day of the month to a div element
      const day = index + 1; // Day of the month
      let classNames = "day"; // CSS classes for styling

      // Checking if the day is today
      if (day === today && date.getMonth() === new Date().getMonth()) {
        classNames += " today";
      }

      // Checking if the day is a holiday
      if (holidays.includes(day)) {
        classNames += " holiday";
      }

      // Checking if the day has an event
      if (events.includes(day)) {
        classNames += " events";
      }

      return (
        <div key={`day-${index}`} className={classNames}>
          {day}
        </div>
      );
    });
  };

  const goToPreviousMonth = () => { // Function to navigate to the previous month
    const newDate = new Date(date.getFullYear(), date.getMonth() - 1, 1); // Creating new date object for previous month
    setDate(newDate); // Setting new date state
  };

  const goToNextMonth = () => { // Function to navigate to the next month
    const newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1); // Creating new date object for next month
    setDate(newDate); // Setting new date state
  };

  const getHolidaysForMonth = (month, year) => { // Function to get holidays for a specific month
    switch (month) { // Switch case to determine holidays based on month
      case 0: // January
        return [1]; // New Year's Day
      case 1: // February
        return [14]; // Valentine's Day
      case 3: // April
        return [1]; // April Fools' Day
      // Add more cases for other months as needed
      default:
        return [];
    }
  };
  

  const getEventsForMonth = (month, year) => { // Function to get events for a specific month
    // Example logic for custom events
    switch (month) { // Switch case to determine events based on month
      case 0: // January
        return [6, 18]; // Example event days
      case 1: // February
        return [8, 21]; // Example event days
      case 2: // March
        return [7, 11]; // Example event days
      case 3: // April
        return [3, 21]; // Example event days
      case 4: // May
        return [8, 12]; // Example event days
      case 5: // June
        return [18, 30]; // Example event days
      case 6: // July
        return [8, 21]; // Example event days
      case 7: // August
        return [8, 21]; // Example event days
      case 8: // September
        return [8, 21]; // Example event days
      case 9: // October
        return [8, 21]; // Example event days
      case 10: // November
        return [8, 21]; // Example event days
      case 11: // December
        return [8, 21]; // Example event days
      default:
        return [];
    }
  };

  return (
    <>
      <Header /> {/* Render Header component */}
      <h1 className="event-title"> <span> Golden Stars college  Events</span> </h1>
      <div id="calendar"> {/* Calendar container */}
        <div className="calendar"> {/* Calendar component */}
          <div className="calendar-nav"> {/* Navigation buttons */}
            <button onClick={goToPreviousMonth}>&lt;&lt;</button> {/* Button to go to previous month */}
            <h2>{`${month} ${year}`}</h2> {/* Displaying current month and year */}
            <button onClick={goToNextMonth}>&gt;&gt;</button> {/* Button to go to next month */}
          </div>
          <div className="calendar-grid"> {/* Calendar grid */}
            {renderDaysOfWeek()} {/* Rendering days of the week */}
            {renderEmptyDays()} {/* Rendering empty days */}
            {renderDaysOfMonth()} {/* Rendering days of the month */}
          </div>
        </div>
   
         
     
        <div key={month} id="event-containers-main"> {/* Container for event details */}
          {/* Individual event containers */}
         
        {hasEvents ? events[year][month].map( eve => {
            return (
                  <div key={month} className="event-inside-container"> {/* Event container */}
                  <img className="event-pics" src={eve.pic} alt="event picture" /> {/* Event image */}
                  <div className="event-dates"> {/* Event date */}
                    <h2>{eve.date}</h2> {/* Day of the event */}
                    <h4>{month + " " + eve.month}{", "+ year}</h4> {/* Month of the event */}
                  </div>
                  <div className="event-details"> {/* Event details */}
                    <h3>{eve.eventName}</h3> {/* Event title */}
                    <p>
                 {eve.discription}
                    </p> {/* Event description */}
                  </div>
                </div>
            )
           }) : <div className="event-nodata"><h1>No Event to show for this month </h1></div> }
        </div>
      </div>
      <Footer/>
    </>
  );
}
