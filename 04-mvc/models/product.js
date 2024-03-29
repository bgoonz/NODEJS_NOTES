const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");
const filePath = path.join(rootDir, "data", "products.json");

const getProductsFromFile = (cb) => {
  fs.readFile(filePath, (error, fileContent) => {
    if (error) {
      return cb([]);
    }
    cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (error) => {
        console.log(error || "Success");
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
