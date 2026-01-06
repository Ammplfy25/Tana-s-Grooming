export interface Service {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  icon: 'scissors' | 'droplets' | 'sparkles';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatarUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}
