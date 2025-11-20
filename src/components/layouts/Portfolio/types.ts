// types.ts

export interface Slide {
  title: string;
  description: string;
  image: string;
  gif?: {
    gifImage1?: string;
    gifImage2?: string;
    gifImage3?: string;
    gifImage4?: string;
    gifImage5?: string;
    gifImage6?: string;
    gifImage7?: string;
  };
  href?: string;
  iconClick?: string;
}

export interface PortfolioItem {
  href: string;
  src: string;
  slides: Slide[];
}
