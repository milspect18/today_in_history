import React from 'react';
import '../styles/EventInfo.css';


const EventInfo = ({ info }) => {
    return (
        <div className="eventInfoContainer">
            {info || "Event Info"}
        </div>
    )
}

export default EventInfo;
