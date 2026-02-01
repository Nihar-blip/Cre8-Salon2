
export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'Hair' | 'Skin' | 'Nails' | 'Wellness';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface StyleRecommendation {
  title: string;
  description: string;
  tips: string[];
}
