// types.ts

export interface Slide {
  title: string;
  description: string;
  image: string;
  gif?: {
    gifImage1?: string;
    gifImage2?: string;
    gifImage3?: string;
  };
  href?: string;
  iconClick?: string;
}

export interface PortfolioItem {
  href: string;
  src: string;
  slides: Slide[];
}
