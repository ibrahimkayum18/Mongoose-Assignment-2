import { Schema, model, connect } from "mongoose";

export type inventoryValidation = {
  quantity: string;
  inStock: boolean;
};

export type TProductInterface = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: object[];
  inventory: inventoryValidation;
};
