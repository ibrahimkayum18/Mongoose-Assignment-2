import { ProductModel } from "./product.model";
import { TProductInterface } from "./products.interface";

const createProductIntoDB = async (product: TProductInterface) => {
  const result = await ProductModel.create(product);
  return result;
};
const getAllProductIntoDB = async () => {
  const result = await ProductModel.find();
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductIntoDB,
};
