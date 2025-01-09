export interface Stat {
  number: string;
  label: string;
  icon?: React.ComponentType;
}

export interface WorkExperience {
  company: string;
  years: string;
  role: string;
  projects?: string[];
}

export interface Project {
  title: string;
  description: string;
  imageUrl?: string;
  category: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export interface Brand {
  name: string;
  logo?: string;
}