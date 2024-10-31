import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header';
import { servicesData } from './servicesData';
import '../pages/ServiceDesc.css';
import Footer from './Footer';
import Loading from './Loading';

export default function ServiceDesc() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const eventId = searchParams.get('eventId');

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  }

  if (eventId === '0') {
    return (
      <>
        <Header />
        <div className="empowerment-container">
          <img className='empowerment-img1' src={servicesData[eventId].img1} alt="" />
          <h1 className='empowerment-title'>{servicesData[eventId].title}</h1>
          <h1 className='empowerment-sub-title'>We highly empower woman</h1>
          <div className='empowerment-disc-main'>
            <div className='empowerment-sub-main'>
              <img className='empowerment-img2' src={servicesData[eventId].img2} alt="" />
              <p className='empowerment-fulldisc1'>{servicesData[eventId].fulldescription2}</p>
            </div>
            <div className='empowerment-sub-main'>
              <p className='empowerment-fulldisc1'>{servicesData[eventId].fulldescription}</p>
              <img className='empowerment-img2' src={servicesData[eventId].img3} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (eventId === '1') {
    return (
      <>
        <Header />
        <div className="empowerment-container">
          <img className='empowerment-img1' src={servicesData[eventId].img1} alt="" />
          <h1 className='empowerment-title1'>{servicesData[eventId].title}</h1>
          <h1 className='empowerment-sub-title'>We grant scholarship specially for woman</h1>
          <div className='empowerment-sub-main'>
            <p className='empowerment-fulldisc1'>{servicesData[eventId].fulldescription}</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (eventId === '2') {
    return (
      <>
        <Header />
        <div className="empowerment-container">
          <img className='empowerment-img1' src={servicesData[eventId].img1} alt="" />
          <h1 className='empowerment-title1'>{servicesData[eventId].title}</h1>
          <h1 className='empowerment-sub-title'>Comprehensive Impact</h1>
          <div className='empowerment-sub-main'>
            <p className='empowerment-fulldisc1'>{servicesData[eventId].fulldescription}</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (eventId === '3') {
    return (
      <>
        <Header />
        <div className="empowerment-container">
          <img className='empowerment-img1' src={servicesData[eventId].img1} alt="" />
          <h1 className='empowerment-title1'>{servicesData[eventId].title}</h1>
          <h1 className='empowerment-sub-title'>Role Modeling and Inspiration</h1>
          <div className='empowerment-sub-main'>
            <p className='empowerment-fulldisc1'>{servicesData[eventId].fulldescription}</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (eventId === '4') {
    return (
      <>
        <Header />
        <div className="empowerment-container">
          <img className='empowerment-img1' src={servicesData[eventId].img1} alt="" />
          <h1 className='empowerment-title1'>{servicesData[eventId].title}</h1>
          <h1 className='empowerment-sub-title'>Applause for the silent hand.</h1>
          <div className='empowerment-sub-main'>
            <p className='empowerment-fulldisc1'>{servicesData[eventId].fulldescription}</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (eventId === '5') {
    return (
      <>
        <Header />
        <div className="empowerment-container">
          <img className='empowerment-img1' src={servicesData[eventId].img1} alt="" />
          <h1 className='empowerment-title1'>{servicesData[eventId].title}</h1>
          <h1 className='empowerment-sub-title'>Utilizing the media for positive impact</h1>
          <div className='empowerment-sub-main'>
            <p className='empowerment-fulldisc1'>{servicesData[eventId].fulldescription}</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (eventId === '6') {
    return (
      <>
        <Header />
        <div className="empowerment-container">
          <img className='empowerment-img1' src={servicesData[eventId].img1} alt="" />
          <h1 className='empowerment-title1'>{servicesData[eventId].title}</h1>
          <h1 className='empowerment-sub-title'>Offering hearts solace to those in need</h1>
          <div className='empowerment-sub-main'>
            <p className='empowerment-fulldisc1'>{servicesData[eventId].fulldescription}</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (eventId === '7') {
    return (
      <>
        <Header />
        <div className="empowerment-container">
          <img className='empowerment-img1' src={servicesData[eventId].img1} alt="" />
          <h1 className='empowerment-title1'>{servicesData[eventId].title}</h1>
          <h1 className='empowerment-sub-title'>Encouraging Entrepreneurial youth</h1>
          <div className='empowerment-sub-main'>
            <p className='empowerment-fulldisc1'>{servicesData[eventId].fulldescription}</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (eventId === '8') {
    return (
      <>
        <Header />
        <div className="empowerment-container">
          <img className='empowerment-img1' src={servicesData[eventId].img1} alt="" />
          <h1 className='empowerment-title1'>{servicesData[eventId].title}</h1>
          <h1 className='empowerment-sub-title'>Celebrating our differences</h1>
          <div className='empowerment-sub-main'>
            <p className='empowerment-fulldisc1'>{servicesData[eventId].fulldescription}</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return null;
}
