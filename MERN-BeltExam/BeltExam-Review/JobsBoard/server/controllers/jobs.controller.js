const {Job} = require("../models/jobs.model");


// get all
module.exports.allJobs = (req, res) => {
  Job.find({}) // find all
    .then(jobs=>res.json(jobs)) // the response will be all the jobs
    .catch(err=>res.status(400).json) // whenever i have an error im doing a status(400)
}

// get one 
module.exports.oneJob = (req, res) => {
  //    here we are making sure that the id matches up with the DB using req.params.id. this is so that the id matches with the route id
  Job.findOne({_id : req.params.id})
    .then(job => res.json(job))
    .catch(err=>res.status(400).json)
}

// create
module.exports.createJob = (req, res) => {
  Job.create(req.body)
    .then(newJob=>res.json(newJob))
    .catch(err=>res.status(400).json)
}

// update
module.exports.updateJob = (req, res) => {
  Job.findOneAndUpdate(
    {_id : req.params.id},
    req.body
  )
    .then()
    .catch(err=>res.status(400).json)
}

// delete
module.exports.deleteJob= (req, res) => {

}