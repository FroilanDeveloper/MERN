const AuthorController = require("../controllers/author.controller");
module.exports = function (app) {
  app.get("/api/authors", AuthorController.allAuthors); // Get All
  app.get("/api/authors/:id", AuthorController.oneAuthor); // Get One 
  app.post('/api/authors', AuthorController.addAuthor); // Add one 
  app.put('/api/authors/:id', AuthorController.updateAuthor); // update 
  app.delete('/api/authors/:id', AuthorController.deleteAuthor); // delete 
};
