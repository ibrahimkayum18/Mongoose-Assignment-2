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
const getSingleOrderIntoDB = async (email: string) => {
  const result = await OrderModel.find({ email: { $in: email } });
  return result;
};
const getSingleOrderIntoDBBySearchQuery = async (email?: string) => {
  // console.log(email);
  if (email) {
    const result = await OrderModel.find({ email: email });
    // console.log(result);
    return result;
  } else {
    const result = await OrderModel.find();
    // console.log(result);
    return result;
  }
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrderIntoDB,
  getSingleOrderIntoDB,
  getSingleOrderIntoDBBySearchQuery,
};
