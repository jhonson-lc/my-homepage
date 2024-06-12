export interface Work {
  id: string;
  type: string;
  title: string;
  thumbnail?: string;
  build?: string[];
  siteurl?: string;
  platform?: string[];
  description?: string;
  video?: string;
}

export interface ColorBadge {
  stack: string;
  color: string;
}

export type SocialIcon = Record<string, string | any>;
