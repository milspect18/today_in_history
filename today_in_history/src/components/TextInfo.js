import React from 'react';
import '../styles/TextInfo.css';

const TextInfo = ({ eventDetails, ...props}) => {
    return (
        <div className="textInfoContainer">
            <h1>{eventDetails?.title || "Event Title"}</h1>
            <h3>{eventDetails?.date || "1/2/3456"}</h3>
        </div>
    )
}

export default TextInfo;
