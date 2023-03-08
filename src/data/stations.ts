import { Station } from "../types/Station";
import r357Logo from "../assets/357.webp";
import nsLogo from "../assets/ns.webp";
import noLogo from "../assets/no.webp";
import defaultLogo from "../assets/radio.png";

export const stations: Station[] = [
  {
    id: "default",
    name: "default",
    logoUrl: defaultLogo,
    streamUrl: "",
    isAvailableToSelect: false,
  },
  {
    id: "357",
    name: "Radio 357",
    logoUrl: r357Logo,
    streamUrl: "https://stream.rcs.revma.com/ye5kghkgcm0uv",
    isAvailableToSelect: true,
  },
  {
    id: "ns",
    name: "Radio Nowy Świat",
    logoUrl: nsLogo,
    streamUrl: "https://stream.rcs.revma.com/ypqt40u0x1zuv",
    isAvailableToSelect: true,
  },
  {
    id: "no",
    name: "Newonce Radio",
    logoUrl: noLogo,
    streamUrl: "https://stream.rcs.revma.com/fq577gymev8uv",
    isAvailableToSelect: true,
  },
];
