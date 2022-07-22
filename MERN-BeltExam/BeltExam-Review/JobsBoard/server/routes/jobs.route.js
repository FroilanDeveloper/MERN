const JobController = require("../controllers/jobs.controller")

module.exports = (app) => {
  app.get("/api/jobs", JobController.allJobs)
  app.get("/api/jobs/:id", JobController.oneJobs)
  app.post("/api/jobs", JobController.createJobs)
  app.put("/api/jobs/:id", JobController.updateJob)
  app.put("/api/jobs/:id", JobController.deleteJob)
};