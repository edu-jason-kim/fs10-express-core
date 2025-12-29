import express from "express";
import ProductController from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.use((req, res, next) => {
  console.log("여기는 products 미들웨어");
  next();
});

productRouter
  .route("/")
  .get(ProductController.getAll)
  .post((req, res) => {
    res.json({ message: "Product 추가" });
  });

productRouter
  .route("/:id")
  .patch((req, res) => {
    res.json({ message: "Product 수정" });
  })
  .delete((req, res) => {
    res.json({ message: "Product 삭제" });
  });

export default productRouter;
