import React from 'react';
import '../styles/EventInfo.css';

const EventInfo = ({ info }) => {
    return (
        <div className="eventInfoContainer">
            <text>{info}</text>
        </div>
    )
}

export default EventInfo;
