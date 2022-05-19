import React, { useState, useEffect } from "react";

// WARNING: this useEffect will run in an infinite loop!
// to fix, pass an empty array as the second argument for useEffect
function DogPics({ onchance }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((r) => r.json())
      .then((data) => {
        // setting state in the useEffect callback
        setImages(data.message);
      });
  }, [onchance]);

  return (
    <div>
      {images.map((image) => (
        <img src={image} key={image} alt={image}/>
      ))}
    </div>
  );
}

export default DogPics;
