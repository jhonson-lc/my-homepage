export type WorkType = {
  company: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
  location: {
    city: string;
    region: string;
  };
};

export type EducationType = {
  institution: string;
  area: string;
  startDate: string;
  endDate: string;
  address: string;
};

export type ProjectType = {
  heading: string;
  summary: string;
  highlights: string[];
};

export type NaturalLanguageType = {
  language: string;
  fluency: string;
  points: number;
};
