import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  res.json({ message: "안녕, Express!!@" });
});

function middlewareA(req, res, next) {
  console.log("aaaa");
  next();
}

function middlewareB(req, res, next) {
  console.log("bbbb");
  res.json({ message: "안녕, Express!" });
}

app.get("/hello", middlewareA, middlewareB);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
