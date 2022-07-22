const {Author} = require("./../models/author.model")


// Get all 
module.exports.allAuthors = (req, res) => {
  Author.find()
    .then(Authors => res.json(Authors))
    .catch(err => res.json(err))
}


// Get one
module.exports.oneAuthor = (req, res) => {
  // Grab id from params
  const id = req.params.id
  Author.findOne({_id: id})
    .then(oneAuthor => res.json(oneAuthor))
    .catch(err => res.json(err))
}


// Add one 
module.exports.addAuthor = (req, res) => {
  Author.create(req.body)
    .then(Author => res.json(Author))
    .catch(err => res.json(err))
}


// Update 
module.exports.updateAuthor = (req, res) => {
  // Grab id from params
  const id = req.params.id
  const updateValue = req.body
  // update: criteria, updatedValue, options
  Author.findOneAndUpdate(
    { _id: id },
    updateValue,
    { new: true, runValidators: true }
  )
    .then(updateAuthor => res.json(updateAuthor))
    .catch(err => res.json(err))
}


// Delete 
module.exports.deleteAuthor = (req, res) => {
  Author.deleteOne({ _id : req.params.id })
    .then(message => res.json(message))
    .catch(err => res.json(err))
}