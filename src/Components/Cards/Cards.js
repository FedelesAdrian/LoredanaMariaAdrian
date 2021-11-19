import React from 'react';
import './Cards.css'
import gelatoHome from '../Images/gelatoHome.png';

const Cards = (props) => {
  return (
    <div >
        <div className="card cardSize text-white ">
          < img className="card-img cardOverlay " src={props.image} alt="Card image" />
          <div className="card-img-overlay centerOverlay">
            <h5 className="card-title ">{props.title}</h5>
            <button className="btn btn-outline-light"> {props.btnName}</button>
          </div>
        </div>
      </div>
  );
};

export default Cards;