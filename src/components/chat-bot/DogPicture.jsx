// new file called DogPicture.jsx
import React, { useEffect, useState } from 'react';

const DogPicture = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
      });
  }, []);
  const memoziedCounter =(stargingNumb)=>{
    let currentCount= stargingNumb;
    return (type) =>{
      if(type ==="decrement" &&currentCount >0) {
        currentCount = currentCount -1;
        return currentCount
      }
      else{
        return "your are already at zero"
      }
    }

  }
  const lever = memoziedCounter(5)
  console.log(lever("decrement"))
  console.log(lever("decrement"))
  console.log(lever("decrement"))
  console.log(lever("decrement"))

  return (
    <div>
      <img src={imageUrl} alt='a dog' />
    </div>
  );
};

export default DogPicture;