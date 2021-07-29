import MainCard from './MainCard';
import EventImage from './EventImage';
import EventTextContent  from './EventTextContent';
import '../styles/App.css';

function App() {
    return (
        <div className="appContainer">
            <MainCard>
                <EventImage />
                <EventTextContent />
            </MainCard>
        </div>
    );
}

export default App;
