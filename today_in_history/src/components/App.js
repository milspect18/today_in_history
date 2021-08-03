import React, { useEffect, useState } from 'react';
import MainCard from './MainCard';
import EventImage from './EventImage';
import EventTextContent  from './EventTextContent';
import { EventDetails, HistoricalData } from '../model/HistoricalEvent';
import '../styles/App.css';

function App() {
    const [eventDets, setEventDets] = useState(new EventDetails());
    const [eventImg, setEventImg] = useState({});

    useEffect(() => {
        HistoricalData.getRandomEventDetails()
            .then(setEventDets)
    }, [setEventDets, setEventImg]);

    return (
        <div className="appContainer">
            <MainCard>
                <EventImage imgSrc={eventImg?.src} altText={eventImg?.alt} />
                <EventTextContent eventDetails={eventDets} />
            </MainCard>
        </div>
    );
}

export default App;
