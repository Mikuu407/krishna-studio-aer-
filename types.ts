
export interface PortfolioImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}
