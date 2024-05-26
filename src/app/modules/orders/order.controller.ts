import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import OrderValidationSchema from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const zodParseData = OrderValidationSchema.parse(orderData);
    const result = await OrderServices.createOrderIntoDB(zodParseData);

    res.status(200).json({
      successs: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something Went Wrong Creating Order",
      err: err,
    });
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
      message: "Order not found",
      err: err,
    });
  }
};

const getSingleOrder = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const result = await OrderServices.getSingleOrderIntoDB(email);

    res.status(200).json({
      successs: true,
      message: "Orders fetched successfully for user email!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Order not found",
      err: err,
    });
  }
};

const getSingleOrderBySearchQuery = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    if (email) {
      // console.log(email);
      const result =
        await OrderServices.getSingleOrderIntoDBBySearchQuery(email);
      res.status(200).json({
        successs: true,
        message: "Orders fetched successfully for search query by email!",
        data: result,
      });
    } else {
      const result = await OrderServices.getSingleOrderIntoDBBySearchQuery();
      console.log(result);
      res.status(200).json({
        successs: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Order not found",
      err: err,
    });
  }
};

export const OrderController = {
  createOrder,
  getOrders,
  getSingleOrder,
  getSingleOrderBySearchQuery,
};
