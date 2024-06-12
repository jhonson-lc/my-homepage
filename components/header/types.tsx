import { IconType } from "react-icons";

export interface LinkNav {
  href?: string;
  text?: string;
  icon?: IconType;
  path?: string;
  external?: boolean;
  onClose?: any;
  font?: { size: any; weight: any };
  color?: string;
  name?: string;
  children?: React.ReactNode;
}
