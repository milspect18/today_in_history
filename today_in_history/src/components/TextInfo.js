import React from 'react';
import EventTitleBlock from './EventTitleBlock';
import '../styles/TextInfo.css';

const TextInfo = ({ eventDetails, ...props}) => {
    return (
        <div className="textInfoContainer">
            <EventTitleBlock />
        </div>
    )
}

export default TextInfo;
