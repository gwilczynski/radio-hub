import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="SongListItemSection">
        <h1>Radio Hub</h1>
        <ul className="SongListItems">
          <li className="SongListItem selected">
            <img className="songCover" src="/357.png" alt="cover"/>
            <audio controls>
              <source src="https://stream.rcs.revma.com/ye5kghkgcm0uv"/>
            </audio>
          </li>
          <li className="SongListItem selected">
            <img className="songCover" src="/ns.png" alt="cover"/>
            <audio controls>
              <source src="https://stream.rcs.revma.com/ypqt40u0x1zuv"/>
            </audio>
          </li>
          <li className="SongListItem selected">
            <img className="songCover" src="/no.png" alt="cover"/>
            <audio controls>
              <source src="https://stream.rcs.revma.com/fq577gymev8uv"/>
            </audio>
          </li>
          <li className="SongListItem selected">
            <img className="songCover" src="/dr.png" alt="cover"/>
            <audio controls>
              <source src="https://dobre.out.airtime.pro/dobre_b"/>
            </audio>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
