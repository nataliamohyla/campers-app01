

export interface Camper {
  id: string;
  name: string;
  price: number;
  location: string;
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
  reviews?: Review[];
}
export interface Review {
  reviewer_name: string;
  comment: string;
  rating: number;
}
