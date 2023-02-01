import express from "express";
import listEndpoints from "express-list-endpoints";
import cors from "cors"
import { badRequestErrorHandler, forbiddenErrorHandler, genericErrorHandler, notFoundErrorHandler, unauthorizedErrorHandler } from "./errorHandler.js";
import shoppingRouter from "../Shop/index.js";


const app = express();

const PORT = process.env.PORT || 3004;

app.use(cors());
app.use(express.json())

app.use("/products", shoppingRouter)

app.use(badRequestErrorHandler)
app.use(notFoundErrorHandler)
app.use(unauthorizedErrorHandler)
app.use(forbiddenErrorHandler)
app.use(genericErrorHandler)

app.listen(PORT, () => {
  console.table(listEndpoints(app));
  console.log("server is running on ", PORT);
});
