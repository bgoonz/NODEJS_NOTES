const express = require("express");

const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();
// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  //   res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-produt", { pageTitle: "Add Product" });
});
// /admin/add-product => POST
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
