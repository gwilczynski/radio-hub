import { Station } from "./Station";

export type PlayListItem = {
  station: Station;
  isCurrentStation: boolean;

  onSelect: (station: Station) => void;
};
