import React from 'react';
import '../styles/EventInfo.css';


const EventInfo = ({ info }) => {
    return (
        <div className="eventInfoContainer">
            <text>{info || "Event Info"}</text>
        </div>
    )
}

export default EventInfo;
