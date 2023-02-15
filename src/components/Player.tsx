import { Station } from "../types/Station";

export function Player({ logoUrl, streamUrl }: Station) {
  return (
    <section className="SongPlayerSection">
      <div className="SongPlayer">
        <img className="App-player-cover" src={logoUrl} alt="cover" />
        <audio autoPlay={true} controls={false} key={streamUrl}>
          <source src={streamUrl} />
        </audio>
      </div>
    </section>
  );
}
