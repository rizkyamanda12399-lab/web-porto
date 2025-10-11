// types.ts
export interface Slide {
  title: string;
  description: string;
  image: string;
}

export interface PortfolioItem {
  href: string;
  src: string;
  slides: Slide[];
}
