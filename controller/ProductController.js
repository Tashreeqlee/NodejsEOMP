import express from "express";
import bodyParser from "body-parser";
import { products } from "../model/index.js";

const productRouter = express.Router();

//fetch all products
productRouter.get("/", (req, res) => {
  try {
    products.fetchProducts(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to retrieve products",
    });
  }
});
productRouter.get("/:id", (req, res) => {
  try {
    products.fetchProduct(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to retrieve a product",
    });
  }
});
productRouter.post("/addProduct", bodyParser.json(), (req, res) => {
  try {
    products.addProduct(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to add a product",
    });
  }
});

productRouter.delete("/delete/:id", (req, res)=>{
  try{
      users.deleteProduct(req, res)
  }catch(e) {
      res.json({
          status: res.statusCode,
          msg: "Unable to change a product",
        });
  }
});

productRouter.patch("/update/:id", bodyParser.json(), (req, res) => {
  try {
    users.updateProduct(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to update a product",
    });
  }
});

export {
   productRouter 
};
