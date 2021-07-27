import React from 'react';
import EventImage from './EventImage';
import '../styles/MainCard.css';

const MainCard = (props) => {

    return (
        <div className="cardContainer">
            <EventImage />
        </div>
    )
}

export default MainCard;
