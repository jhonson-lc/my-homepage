import {
  BsGithub,
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";

import { LinkNav } from "./types";

export const SOCIAL_MEDIAS: LinkNav[] = [
  {
    href: "https://www.instagram.com/jhonson.lc/?hl=es",
    text: "Instagram",
    icon: BsInstagram,
  },
  {
    href: "https://www.facebook.com/jhon.cisneros.754/",
    text: "Facebook",
    icon: BsFacebook,
  },
  { href: "https://twitter.com/jhonson_lc", text: "Twitter", icon: BsTwitter },
  {
    href: "https://www.linkedin.com/in/jhonlescano/",
    text: "LinkedIn",
    icon: BsLinkedin,
  },
];

export const LINKS_NAV: LinkNav[] = [
  { href: "/", text: "Home" },
  { href: "/work", text: "Work" },
  { href: "/blog", text: "Blog" },
  { href: "/contact", text: "Contact" },
  {
    href: "https://github.com/jhonson-lc",
    text: "View Source",
    icon: BsGithub,
  },
];
