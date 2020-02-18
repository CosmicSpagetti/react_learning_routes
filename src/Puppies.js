import React from 'react'
import puppyData from './data/puppy-data'
import './image-display.css';

const Puppies = () => {
  const displayPuppies = puppyData.map(puppy => {
    const { id, image } = puppy;
    return <img src={image} className='app-img' key={id}
    />
  });
  return (
    <>
    <h1> Puppies! </h1>
    {displayPuppies}
    </>
  )
} 

export default Puppies;