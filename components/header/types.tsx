import { IconType } from "react-icons";

export interface LinkNav {
  href?: string;
  text?: string;
  icon?: IconType;
  path?: string;
  target?: string;
  onClose?: any;
  font?: { size: any; weight: any };
}
