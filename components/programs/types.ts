export interface Stage {
  title: string;
  description: string;
  icon?: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface SuccessStory {
  title: string;
  description: string;
  link?: string;
}

export interface BlogPost {
  title: string;
  url: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Sponsor {
  name: string;
  logo?: string;
}

export interface ProgramColors {
  primary: string;
  secondary: string;
  accent: string;
}

