import React from 'react';
import EventTitleBlock from './EventTitleBlock';
import EventInfo from './EventInfo';
import '../styles/TextInfo.css';

const TextInfo = ({ eventDetails, ...props}) => {
    return (
        <div className="textInfoContainer">
            <EventTitleBlock
                eventName={eventDetails?.name}
                eventDate={eventDetails?.date}
            />

            <EventInfo info={eventDetails?.info} />
        </div>
    )
}

export default TextInfo;
