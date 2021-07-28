import React from 'react';
import '../styles/EventTitleBlock.css';

const EventTitleBlock = ({ eventName, eventDate, ...props }) => {
    return (
        <div className="eventTitleBlockContainer">
            <div className="eventTitle">
                {eventName || "Event Title"}
            </div>
            <div className="eventDate">
                {eventDate || "1/2/3456"}
            </div>
        </div>
    )
}

export default EventTitleBlock;
