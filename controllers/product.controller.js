import ProductModel from "../models/product.model.js";

// controller 함수:
function getAll(req, res) {
  // model을 통해 데이터 호출
  const products = ProductModel.findAll();

  // view로 표현
  res.json(products);
}

export default {
  getAll,
};
