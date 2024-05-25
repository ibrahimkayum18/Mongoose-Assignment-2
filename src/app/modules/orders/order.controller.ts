import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await OrderServices.createOrderIntoDB(orderData);

    res.status(200).json({
      successs: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrderIntoDB();
    res.status(200).json({
      successs: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      err: err,
    });
  }
};

const getSingleOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await OrderServices.getSingleOrderIntoDB(id);

    res.status(200).json({
      successs: true,
      message: "Order fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      err: err,
    });
  }
};

export const OrderController = {
  createOrder,
  getOrders,
  getSingleOrder,
};
