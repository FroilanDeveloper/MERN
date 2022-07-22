const mongoose = require('mongoose');
//                           Make sure to change DB name for every project
mongoose.connect("mongodb://localhost/Jobs_db", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Established a connection to the database"))
  .catch(err => console.log("Something went wrong when connecting to the database", err));
