import "./App.css";
import radio357Logo from "./assets/357.webp";
import radioNowySwiatLogo from "./assets/ns.webp";
import radioNewonceLogo from "./assets/no.webp";

function App() {
  return (
    <div className="App">
      <section className="SongListItemSection">
        <h1>Radio Hub</h1>
        <ul className="SongListItems">
          <li className="SongListItem selected">
            <img className="songCover" src={radio357Logo} alt="cover" />
            <audio controls>
              <source src="https://stream.rcs.revma.com/ye5kghkgcm0uv" />
            </audio>
          </li>
          <li className="SongListItem selected">
            <img className="songCover" src={radioNowySwiatLogo} alt="cover" />
            <audio controls>
              <source src="https://stream.rcs.revma.com/ypqt40u0x1zuv" />
            </audio>
          </li>
          <li className="SongListItem selected">
            <img className="songCover" src={radioNewonceLogo} alt="cover" />
            <audio controls>
              <source src="https://stream.rcs.revma.com/fq577gymev8uv" />
            </audio>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
