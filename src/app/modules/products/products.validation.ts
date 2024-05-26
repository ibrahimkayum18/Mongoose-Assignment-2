import { z } from "zod";

// Define the schema for the inventory
const InventorySchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

// Define the schema for the product
const ProductValidationSchema = z.object({
  name: z.string().nonempty(),
  description: z.string().nonempty(),
  price: z.number(),
  category: z.string().nonempty(),
  tags: z.array(z.string().nonempty()),
  variants: z.array(
    z.object({
      type: z.string(),
      value: z.string(),
    })
  ),
  inventory: InventorySchema,
});

export default ProductValidationSchema;
