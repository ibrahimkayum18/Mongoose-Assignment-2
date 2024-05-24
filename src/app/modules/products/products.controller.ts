import { Request, Response } from "express";
import { ProductServices } from "./products.service";

// Creating product route insertion function
const createProduct = async (req: Request, res: Response) => {
  try {
    const { products: productsData } = req.body;

    const result = await ProductServices.createProductIntoDB(productsData);

    res.status(200).json({
      successs: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductIntoDB();
    res.status(200).json({
      successs: true,
      message: "Products fetched successfully!",
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

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductServices.getSingleProductIntoDB(id);

    res.status(200).json({
      successs: true,
      message: "Product fetched successfully!",
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

const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductServices.deleteSingleProductFromDB(id);

    res.status(200).json({
      successs: true,
      message: "Product deleted successfully",
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

export const ProductsController = {
  createProduct,
  getProduct,
  getSingleProduct,
  deleteSingleProduct,
};
