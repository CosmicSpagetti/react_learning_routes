import React from 'react'
import unicornData from './data/unicorn-data'
import './image-display.css';

const Unicorns = () => {
  const displayUnicorns = unicornData.map(unicorn => {
    const { id, image } = unicorn;
    return <img src={image} className='app-img' key={id}
    />
  });
  return (
    <>
    <h1> Unicorns! </h1>
    {displayUnicorns}
    </>
  )
} 

export default Unicorns;