import { Space, Amenity, PricingPlan } from './types';

export const spaces: Space[] = [
  {
    id: '1',
    name: 'Hot Desk',
    type: 'desk',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    capacity: 1,
    price: 25,
    available: true,
  },
  {
    id: '2',
    name: 'Private Office',
    type: 'office',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
    capacity: 4,
    price: 199,
    available: true,
  },
  {
    id: '3',
    name: 'Meeting Room A',
    type: 'meeting-room',
    image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4',
    capacity: 8,
    price: 50,
    available: true,
  },
];

export const amenities: Amenity[] = [
  { id: '1', name: 'High-Speed WiFi', icon: 'wifi' },
  { id: '2', name: 'Coffee & Tea', icon: 'coffee' },
  { id: '3', name: '24/7 Access', icon: 'clock' },
  { id: '4', name: 'Meeting Rooms', icon: 'users' },
  { id: '5', name: 'Printing Services', icon: 'printer' },
  { id: '6', name: 'Phone Booths', icon: 'phone' },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: '1',
    name: 'Day Pass',
    price: 25,
    duration: 'day',
    features: ['Access 9AM-5PM', 'Hot Desk', 'WiFi', 'Coffee & Tea'],
  },
  {
    id: '2',
    name: 'Dedicated Desk',
    price: 299,
    duration: 'month',
    features: ['24/7 Access', 'Dedicated Desk', 'Meeting Room Credits', 'Storage Locker'],
    popular: true,
  },
  {
    id: '3',
    name: 'Private Office',
    price: 599,
    duration: 'month',
    features: ['Private Space', 'Up to 4 People', 'Meeting Room Credits', 'Business Address'],
  },
];