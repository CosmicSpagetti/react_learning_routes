import React from 'react'
import sharkData from './data/shark-data'
import './image-display.css';

const Sharks = () => {
  const displaySharks = sharkData.map(shark => {
    const { id, image } = shark;
    return <img src={image} className='app-img' key={id}
    />
  });
  return (
    <>
    <h1> Sharks! </h1>
    {displaySharks}
    </>
  )
} 

export default Sharks;