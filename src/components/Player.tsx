import { Station } from "../types/Station";

export const Player = ({ logoUrl, streamUrl }: Station) => {
  return (
    <section className="SongListItem selected">
      <img className="songCover" src={logoUrl} alt="cover" />
      <audio controls>
        <source src={streamUrl} />
      </audio>
    </section>
  );
};
