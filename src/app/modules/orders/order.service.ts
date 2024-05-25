import { OrderInterface } from "./order.interface";
import { OrderModel } from "./order.modules";

const createOrderIntoDB = async (order: OrderInterface) => {
  const result = await OrderModel.create(order);
  return result;
};
const getAllOrderIntoDB = async () => {
  const result = await OrderModel.find();
  return result;
};
const getSingleOrderIntoDB = async (id: string) => {
  const result = await OrderModel.findOne({ _id: id });
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrderIntoDB,
  getSingleOrderIntoDB,
};
