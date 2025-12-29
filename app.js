import cookieParser from "cookie-parser";
import express from "express";
import logger from "./middlewares/logger.js";
import productRouter from "./routes/product.route.js";
import userRouter from "./routes/user.route.js";

const app = express();

// middlewares
app.use(cookieParser());  // 3rd party middleware
app.use(express.json());  // built-in middleware
app.use(logger);          // custom middleware

// routes
app.use("/products", productRouter);
app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
