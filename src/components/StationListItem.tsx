import { PlayListItem } from "../types/PlayListItem";

export function StationListItem({
  station,
  isCurrentStation,
  onSelect,
}: PlayListItem) {
  function handleSelect() {
    onSelect(station);
  }

  return (
    <li
      className={`SongListItem ${isCurrentStation ? "selected" : ""}`}
      onClick={handleSelect}
    >
      <img className="songCover" src={station.logoUrl} alt="cover" />
      <div className="songInfo">
        <span className="songTitle">{station.name}</span>
        <span className="songArtist">{station.name}</span>
      </div>
    </li>
  );
}
