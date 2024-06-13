import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

import { LinkNav } from "./types";
import { CvIcon } from "components/CommandMenu";

export const SOCIAL_MEDIAS: LinkNav[] = [
  {
    href: "https://www.instagram.com/jhonson.lc/?hl=es",
    text: "IG",
    name: "Instagram",
    icon: BsInstagram,
    color: "purple",
  },
  {
    href: "https://www.facebook.com/jhon.cisneros.754/",
    text: "FB",
    name: "Facebook",
    icon: BsFacebook,
    color: "facebook",
  },
  {
    href: "https://twitter.com/jhonson_lc",
    color: "twitter",
    text: "TW",
    name: "Twitter",
    icon: BsTwitter,
  },
  {
    href: "https://www.linkedin.com/in/jhonlescano/",
    text: "IN",
    name: "LinkedIn",
    icon: BsLinkedin,
    color: "linkedin",
  },
];

export const LINKS_NAV: LinkNav[] = [
  { href: "/", text: "Home" },
  { href: "/work", text: "Work" },
  { href: "/contact", text: "Contact" },
  {
    href: "/curriculum-vitae",
    text: "Resume",
    icon: CvIcon,
  },
];
