// products.model.ts (ou em um arquivo separado para o esquema)
import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  // Defina seus campos aqui
  name: String,
  price: Number,
  // outros campos...
});

// Se você tem uma interface ou classe TypeScript para Product, ela fica separada:
export interface Product {
  id: string;
  name: string;
  price: number;
  // outros campos...
}
