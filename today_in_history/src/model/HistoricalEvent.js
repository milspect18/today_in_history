
export class EventDetails {
    constructor() {
        this.name = ""
        this.date = ""
        this.info = ""
    }
}


export class HistoricalData {
    static API_PATH = "http://history.muffinlabs.com/date";

    static async fetchHistoricalEvents() {
        const response = await fetch(HistoricalData.API_PATH);
        const respJson = await response.json();

        return respJson
    }

    static async getRandomEventDetails() {
        const respData = await HistoricalData.fetchHistoricalEvents();
        const numItems = respData?.data.Events.length;
        const randItmIdx = Math.floor(Math.random() * numItems);

        const rawEvent = respData?.data.Events[randItmIdx];
        const date = `${respData?.date}, ${rawEvent?.year}`

        return HistoricalData.toEventDetails(date, rawEvent);
    }

    static toEventDetails(date, rawData) {
        let details = new EventDetails();

        details.date = date;
        details.name = rawData?.links[0]?.title
        details.info = rawData?.text

        return details
    }
}