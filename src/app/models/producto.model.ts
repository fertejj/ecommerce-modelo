export interface Producto {
  _id: string;
  name: string;
  description: string;
  price: number;
  discount_price: number;
  category: string[];
  created_at: Date;
  imageURL: string[];
  updated_at?: Date;
}
