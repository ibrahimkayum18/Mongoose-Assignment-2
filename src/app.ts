import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductsRoute } from "./app/modules/products/products.route";
import { OrderRoute } from "./app/modules/orders/order.route";
import bodyParser from "body-parser";
const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Application Routes
app.use("/api", ProductsRoute);
app.use("/api", OrderRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Assignment 2 Server is running");
});

export default app;
