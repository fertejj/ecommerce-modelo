export interface Producto {
  _id: string;
  name: string;
  description: string;
  price: string;
  category: string[];
  created_at: Date;
  imageURL: string[];
  updated_at?: Date;
}
