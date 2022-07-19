const {Product} = require("./../models/product.model")


// Get all 
module.exports.allProducts = (req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.json(err))
}


// Get one
module.exports.oneProduct = (req, res) => {
  // Grab id from params
  const id = req.params.id
  Product.findOne({_id: id})
    .then(oneProduct => res.json(oneProduct))
    .catch(err => res.json(err))
}


// Add one product
module.exports.addProduct = (req, res) => {
  Product.create(req.body)
    .then(product => res.json(product))
    .catch(err => res.json(err))
}


// Update product
module.exports.updateProduct = (req, res) => {
  // Grab id from params
  const id = req.params.id
  const updateValue = req.body
  // update: criteria, updatedValue, options
  Product.findOneandUpdate(
    { _id: id },
    updateValue,
    { new: true, runValidators: true }
  )
    .then(updateProduct => res.json(this.updateProduct))
    .catch(err => res.json(err))
}


// Delete product
module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id : req.params.id })
    .then(message => res.json(message))
    .catch(err => res.json(err))
}

