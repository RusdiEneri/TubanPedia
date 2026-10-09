export type Destination = {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  latitude: number;
  longitude: number;
  openingHours: string;
  ticketPrice: string;
  coverImage: string;
  gallery: string[];
  district?: string;
  facilities?: string[];
  bestTime?: string;
  accessibility?: string;
  highlights?: string[];
};
