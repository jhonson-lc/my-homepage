export interface Work {
  id: string;
  title: string;
  thumbnail: string;
  build?: string[];
  siteurl?: string;
  platform?: string[];
  description?: string;
}

export interface ColorBadge {
  stack: string;
  color: string;
}
