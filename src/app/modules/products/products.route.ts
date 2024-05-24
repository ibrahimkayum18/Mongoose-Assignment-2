import express from "express";
import { ProductsController } from "./products.controller";

const router = express.Router();

router.post("/products", ProductsController.createProduct);

router.get("/products", ProductsController.getProduct);

export const ProductsRoute = router;
