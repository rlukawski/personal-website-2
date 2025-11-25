export interface Screenshot {
  id: string;
  src: string;
  alt: string;
  sourceUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  dateRange: string;
  customer?: string | { display: string; url: string };
  url?: string;
  description: string;
  screenshots: Screenshot[];
}

