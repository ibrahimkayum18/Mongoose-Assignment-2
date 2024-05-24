import express from "express";
import { ProductsController } from "./products.controller";

const router = express.Router();

router.post("/products", ProductsController.createProduct);

router.get("/products", ProductsController.getProduct);

router.get("/products/:id", ProductsController.getSingleProduct);

router.delete("/products/:id", ProductsController.deleteSingleProduct);

export const ProductsRoute = router;
