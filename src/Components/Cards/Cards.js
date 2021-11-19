import React from 'react';
import './Cards.css'
import gelatoHome from '../Images/gelatoHome.png';

const Cards = () => {
  return (
      
    <div className="card cardSize text-white"> 
      <img className="card-img cardOverlay" src={gelatoHome} alt="Card image"/>
      <div className="card-img-overlay centerOverlay">
        <h5 className="card-title ">Ice cream</h5>
        <button className="btn btn-outline-light">Explore options</button>
      </div>
    </div>
    
  );
};

export default Cards;