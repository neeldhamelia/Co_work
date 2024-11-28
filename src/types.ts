export interface Space {
  id: string;
  name: string;
  type: 'desk' | 'office' | 'meeting-room';
  image: string;
  capacity: number;
  price: number;
  available: boolean;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  popular?: boolean;
}