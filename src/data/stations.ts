import { Station } from "../types/Station";
import r357Logo from "../assets/357.webp";
import nsLogo from "../assets/ns.webp";
import noLogo from "../assets/no.webp";

export const stations: Station[] = [
  {
    id: "357",
    name: "Radio 357",
    logoUrl: r357Logo,
    streamUrl: "https://stream.rcs.revma.com/ye5kghkgcm0uv",
  },
  {
    id: "ns",
    name: "Radio Nowy Świat",
    logoUrl: nsLogo,
    streamUrl: "https://stream.rcs.revma.com/ypqt40u0x1zuv",
  },
  {
    id: "no",
    name: "Newonce Radio",
    logoUrl: noLogo,
    streamUrl: "https://stream.rcs.revma.com/fq577gymev8uv",
  },
];
