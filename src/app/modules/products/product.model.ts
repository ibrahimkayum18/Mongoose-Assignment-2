import { Schema, model } from "mongoose";
import { TProductInterface, inventoryValidation } from "./products.interface";

const inventorySchema = new Schema<inventoryValidation>({
  quantity: { type: String, required: true },
  inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<TProductInterface>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: [{ type: String, required: true }],
  variants: [{ type: Object, required: true }],
  inventory: inventorySchema,
});

export const ProductModel = model<TProductInterface>("Product", productSchema);
