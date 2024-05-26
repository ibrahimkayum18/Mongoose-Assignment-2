import express from "express";
import { OrderController } from "./order.controller";

const router = express.Router();

router.post("/orders", OrderController.createOrder);

// router.get("/orders", OrderController.getOrders);

router.get("/orders/:email", OrderController.getSingleOrder);

router.get("/orders", OrderController.getSingleOrderBySearchQuery);

export const OrderRoute = router;
