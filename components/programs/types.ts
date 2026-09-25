export interface Stage {
  title: string;
  description: string;
  icon?: string;
  /** Color propio de la etapa (hex). Si no está definido, se usa colors.primary. */
  color?: string;
  /** Foto real que representa la etapa (opcional). Debe existir en public/images. */
  image?: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface SuccessStory {
  title: string;
  description: string;
  link?: string;
  image?: {
    src: string;
    alt: string;
  };
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

