export type inventoryValidation = {
  quantity: number;
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
