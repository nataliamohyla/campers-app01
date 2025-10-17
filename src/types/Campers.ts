export interface Photo {
  thumb: string;
  original: string;
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  description: string;
  location: string;
  rating?: number;
  type: string;
  transmission?: string;
  engine?: string;
  AC?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;
  form?: string;
  length?: number;
  width?: number;
  height?: number;
  tank?: number;
  consumption?: number;
  photos?: string[];
  gallery?: Photo[];
  reviews?: Review[];
  email?: string;
}
export interface Review {
  reviewer_name: string;
  comment: string;
  rating: number;
}
