// Card.js

import React from 'react';
import './Card.css';

const Card = ({ person }) => { // Assuming 'person' is the data structure for each historical figure
  return (
    <div className='card'>
      <h3 className='cardName'>{person.names}</h3>
      <div className='cardTypes'>
        <div>ID: {person.id}</div>
        <div>Country: {person.country}</div>
        <div>Age: {person.age}</div>
        <div>Nickname: {person.Nickname}</div>
      </div>
      {/* You can customize the additional information as needed */}
      <div className='cardInfo'>
        <div className='cardData'>
          {/* Additional information if needed */}
        </div>
      </div>
    </div>
  );
};

export default Card;
