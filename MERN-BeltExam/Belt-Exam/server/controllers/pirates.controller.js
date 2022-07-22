const {Pirate} = require("../models/pirates.model");


// get all
module.exports.allPirates = (req, res) => {
  Pirate.find({}) // find all
    .then(pirates=>res.json(pirates)) // the response will be all the jobs
    .catch(err=>res.status(400).json(err)) 
}

// get one 
module.exports.onePirate = (req, res) => {
  //    here we are making sure that the id matches up with the DB using req.params.id. this is so that the id matches with the route id
  Pirate.findOne({_id : req.params.id})
    .then(pirate => res.json(pirate))
    .catch(err=>res.status(400).json(err))
}

// create
module.exports.createPirate = (req, res) => {
  Pirate.create(req.body)
    .then(newPirate=>res.json(newPirate))
    .catch(err=>res.status(400).json(err))
}

// update
module.exports.updatePirate = (req, res) => {
  Pirate.findOneAndUpdate(
    {_id : req.params.id},
    req.body
  )
    .then(updatedPirate => res.json(updatedPirate))
    .catch(err=>res.status(400).json(err))
}

// delete
module.exports.deletePirate= (req, res) => {
  Pirate.deleteOne({ _id : req.params.id})
  // response here can be called either status or response. it cant be called res because then the res.json wont be called. 
    .then(response => res.json(response))
    .catch(err=>res.status(400).json(err))
}