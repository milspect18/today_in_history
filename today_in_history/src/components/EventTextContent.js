import React from 'react';
import EventTitleBlock from './EventTitleBlock';
import EventInfo from './EventInfo';
import '../styles/EventTextContent.css';

const EventTextContent = ({ eventDetails, ...props}) => {
    return (
        <div className="eventTextContentContainer">
            <EventTitleBlock
                eventName={eventDetails?.name}
                eventDate={eventDetails?.date}
            />

            <EventInfo info={eventDetails?.info} />
        </div>
    )
}

export default EventTextContent;
