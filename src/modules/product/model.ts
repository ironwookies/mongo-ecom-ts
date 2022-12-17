import mongoose, { Schema, Model, Document } from 'mongoose';

export type ProductDocument = Document & {
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
};

export type ProductInput = {
  name: ProductDocument['name'];
  description: ProductDocument['description'];
  price: ProductDocument['price'];
  image: ProductDocument['image'];
  quantity: ProductDocument['quantity'];
};

const productSchema = new Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  image: { type: String },
  quantity: { type: Number },
});

export const Product: Model<ProductDocument> = mongoose.model<ProductDocument>(
  'Product',
  productSchema
);
