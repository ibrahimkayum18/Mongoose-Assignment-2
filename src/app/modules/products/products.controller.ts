import { Request, Response } from "express";
import { ProductServices } from "./products.service";
import ProductValidationSchema from "./products.validation";

// Creating product route insertion function
const createProduct = async (req: Request, res: Response) => {
  try {
    const productsData = req.body;

    const zodParsedData = ProductValidationSchema.parse(productsData);

    const result = await ProductServices.createProductIntoDB(zodParsedData);

    res.status(200).json({
      successs: true,
      message: "Product created successfully!",
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

const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updateData = req.body;

    const result = await ProductServices.updateProductInDB(id, updateData);

    // if (!result) {
    //   return res.status(404).json({
    //     success: false,
    //     message: "Product not found",
    //   });
    // }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Failed to update product",
      error: err,
    });
  }
};

export const ProductsController = {
  createProduct,
  getProduct,
  getSingleProduct,
  deleteSingleProduct,
  updateProduct,
};
