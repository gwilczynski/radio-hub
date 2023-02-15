import "./App.css";
import { Player } from "./components/Player";
import { Station } from "./types/Station";

import r357Logo from "./assets/357.webp";
import nsLogo from "./assets/ns.webp";
import noLogo from "./assets/no.webp";

function App() {
  const stations: Station[] = [
    {
      id: "357",
      logoUrl: r357Logo,
      streamUrl: "https://stream.rcs.revma.com/ye5kghkgcm0uv",
    },
    {
      id: "ns",
      logoUrl: nsLogo,
      streamUrl: "https://stream.rcs.revma.com/ypqt40u0x1zuv",
    },
    {
      id: "no",
      logoUrl: noLogo,
      streamUrl: "https://stream.rcs.revma.com/fq577gymev8uv",
    },
  ];

  return (
    <div className="App">
      <section className="SongListItemSection">
        <h1>Radio Hub</h1>
        <ul className="SongListItems">
          {stations.map((station) => (
            <li key={station.id}>
              <Player {...station} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
