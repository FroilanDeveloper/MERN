const Joke = require("./../models/Jokes.model")


// Get all
module.exports.allJokes = (req, res) => {
  Joke.find()
    .then((jokes) => res.json(jokes))
    .catch((err) => res.json(err));
};

// adding one joke to our empty list
module.exports.addJoke = (request, response) => {
  Joke.create(request.body)
    .then((joke) => response.json(joke))
    .catch((err) => response.json(err));
};

// Get one joke
module.exports.oneJoke = (req, res) => {
  Joke.findOne({ _id: idFromParams })
    .then((oneJoke) => res.json(oneJoke))
    .catch((err) => res.json(err));
};


// Example of update -- getOne + create
module.exports.updateJoke = (req, res) => {
  // grab id from params
  const idFromParams = req.params.id;
  const updateValue = req.body;
  // update: criteria, updatedValue, options
  Joke.findOneAndUpdate({ id: idFromParams }, updateValue, {
    new: true,
    runValidators: true,
  })
    .then((updatedJoke) => res.json(updatedJoke))
    .catch((err) => res.json(err));
};

// delete
module.exports.deleteJoke = (req, res) => {
  Joke.deleteOne({ id: req.params.id })
    .then((message) => res.json(message))
    .catch((err) => res.json(err));
};
