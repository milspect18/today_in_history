import React from 'react';
import EventImage from './EventImage';
import TextInfo  from './TextInfo';
import '../styles/MainCard.css';

const MainCard = (props) => {

    return (
        <div className="cardContainer">
            <EventImage />
            <TextInfo />
        </div>
    )
}

export default MainCard;
