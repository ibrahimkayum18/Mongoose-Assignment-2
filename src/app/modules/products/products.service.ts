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
const getSingleProductIntoDB = async (id: string) => {
  const result = await ProductModel.findOne({ _id: id });
  return result;
};
const deleteSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.deleteOne({ _id: id });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductIntoDB,
  getSingleProductIntoDB,
  deleteSingleProductFromDB,
};
