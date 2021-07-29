import MainCard from './MainCard';
import EventImage from './EventImage';
import TextInfo  from './EventTextContent';
import '../styles/App.css';

function App() {
    return (
        <div className="appContainer">
            <MainCard>
                <EventImage />
                <TextInfo />
            </MainCard>
        </div>
    );
}

export default App;
