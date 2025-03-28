export interface FoodLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
  description?: string; // Nueva propiedad
  origin?: string; // Nueva propiedad
  varieties?: string[]; // Nueva propiedad
  recipe?: { // Nueva propiedad
    ingredients: string[];
    preparation: string;
  };
  reviews?: { // Nueva propiedad
    user: string;
    date: string;
    comment: string;
    rating: number;
  }[];
  curiosities?: string; // Nueva propiedad
}
