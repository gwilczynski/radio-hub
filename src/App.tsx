import "./App.css";
import { Player } from "./components/Player";

import { stations } from "./data/stations";
import { StationListItem } from "./components/StationListItem";
import { useState } from "react";
import { Station } from "./types/Station";

function App() {
  const [currentStationIndex, setCurrentStationIndex] = useState(0);
  const currentStation = stations[currentStationIndex];

  function handleSelectStation(selectedStation: Station) {
    const audioIndex = stations.findIndex(
      (station) => station.id === selectedStation.id
    );
    if (audioIndex >= 0) {
      setCurrentStationIndex(audioIndex);
    }
  }

  return (
    <div className="App">
      <Player {...currentStation} />
      <section className="SongListItemSection">
        <h1>Stations</h1>
        <ul className="SongListItems">
          {stations.map((station) => (
            <StationListItem
              key={station.id}
              station={station}
              isCurrentStation={currentStation.id === station.id}
              onSelect={handleSelectStation}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
