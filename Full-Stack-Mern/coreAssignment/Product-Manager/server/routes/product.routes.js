const ProductController = require("../controllers/product.controller");
module.exports = function (app) {
  app.get("/api/products", ProductController.allProducts); // Get All
  app.get("/api/products/:id", ProductController.oneProduct); // Get One product
  app.post('/api/products', ProductController.addProduct); // Add one product
  app.put('/api/products/:id', ProductController.updateProduct); // update product
  app.delete('/api/products/:id', ProductController.deleteProduct); // delete product
};
