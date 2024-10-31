import React from 'react';
import '../Background.css';
import { events } from '../event.js';

export default function Backtestmonial({ imgs, title, subtitle, disc }) {
  return (
    <div id="main-background">
      <div className="main-bg-title">
           {title === 'background'?  <img src={imgs} alt="Golden stars college building" />: <></>}   
        <h1>{title ==='background'?`Background`:``}</h1>
      </div>

      <div>
        <div className="background-disc">
          <h2>Here is our {title ==='background'? `background`: `mission`}</h2>

          {title === 'background' ? (
            <div className='background-concatinate'>
              <p className='para-disc'>{events.background.fifthpart}</p>
              <p className='para-disc'>{events.background.secondpart}</p>
              <p className='para-disc'>{events.background.thirdpart}</p>
              <p className='para-disc'>{events.background.fourthpart}</p>
              <p className='para-disc'>{events.background.fifthpart}</p>
            </div>
          
          ) : (
            <div>
              
              <ol>
                {events.mission.thirdpart.map((list, index) => (
                  <li key={index}>{list}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
