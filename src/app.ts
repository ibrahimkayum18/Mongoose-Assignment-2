import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductsRoute } from "./app/modules/products/products.route";
const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// Application Routes
app.use("/api", ProductsRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Assignment 2 Server is running");
});

export default app;
