// Rewrite the code the way it would be seen by the interpreter and predict the output. An example is shown here:

// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// After you've made your prediction, run the original code to find out if you were right! If your predictions were incorrect, look back at how the code is hoisted by the interpreter.

// NOTE
// Run the same code as above with ES6 syntax and compare your results:

// console.log(example);
// let example = "I'm the example!";   
// Even if let and const prevent a lot of the confusing behavior of JavaScript's hoisting, these are ES6 constructs and a huge amount of the world's live JavaScript code is still ES5. Understanding how ES5 hoists var and the rules of scoping are important for every JavaScript developer!


// 1
console.log(hello); 
var hello = 'world';
// output undefined

console.log("****************")

// 2
var needle = 'haystack';
test();
function test(){
  var needle = 'magnet';
  console.log(needle);
}
 // output magnet

console.log("****************")

// 3
var brendan = 'super cool';
function print(){
  brendan = 'only okay';
  console.log(brendan);
}
console.log(brendan);

// output 'super-cool'

console.log("****************")

// 4
var food = 'chicken';
console.log(food); 
eat();
function eat(){
  food = 'half-chicken';
  console.log(food);
  var food = 'gone'; 
}
// output 'chicken'
// output ''half-chiken'
console.log("****************")

// 5
mean();
console.log(food);
var mean = function() { 
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
}
console.log(food);

// This will not run because mean is not a function so an error

console.log("****************")

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);

// undefined
// rock
// r&b
// disco


console.log("****************")



// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);

// san jose
// seattle
// burbank
// san jose



console.log("****************")

// 8 - Bonus ES6: const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if(dojo.students > 50){
    dojo.hiring = true;
  }
  else if(dojo.students <= 0){
    dojo = "closed for now";
  }
  return dojo;
}
// Predict
// Chicago, 65 
// Berkeley, 0
// closed for now
// Output
//  { name: 'Chicago', students: 65, hiring: true }