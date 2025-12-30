import cookieParser from "cookie-parser";
import express from "express";
import multer from "multer";
import logger from "./middlewares/logger.js";
import productRouter from "./routes/product.route.js";
import userRouter from "./routes/user.route.js";

const app = express();
const upload = multer({ dest: "uploads/" });

// middlewares
app.use(cookieParser()); // 3rd party middleware
app.use(express.json()); // built-in middleware
app.use(logger); // custom middleware
app.use(express.static("uploads"));

// routes
app.use("/products", productRouter);
app.use("/users", userRouter);

// file upload example
app.post("/files", upload.single("attachment"), (req, res) => {
  console.log(req.file);
  res.json({ message: "File uploaded" });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
