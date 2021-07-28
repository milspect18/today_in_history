import React from 'react';
import EventTileBlock from './EventTitleBlock';
import '../styles/TextInfo.css';

const TextInfo = ({ eventDetails, ...props}) => {
    return (
        <div className="textInfoContainer">
            <EventTileBlock />
        </div>
    )
}

export default TextInfo;
