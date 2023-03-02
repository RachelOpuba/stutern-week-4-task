//// ******* QUESTION 1 SOLUTION STARTS HERE ******* //////////////////

//The following are the difference between mutating array methods and non-mutating array methods;
/// (1) MODIFICATION: Mutating array methods modifies the original arrays that they are called on
//      while the non-mutating array methods does not modify the original array that they are called on.
/// (2) RETURN VALUE: Most of the mutating array methods do not return a new array. Instead they return the
//      modified original array. On the other hand, non-mutating array methods always return a new array

// MUTATING ARRAY METHODS EXAMPLES
// (1) push()
// (2) pop()
// (3) shift()
// (4) unshift()
// (5) splice()

// NON-MUTATING ARRAY METHODS EXAMPLES
// (1) slice()
// (2) concat()
// (3) filter()
// (4) map()
// (5) reduce()

//// ******* QUESTION 2 SOLUTION STARTS HERE ******* //////////////////
const languageArray = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
//2(a)
languageArray.push("Kotlin");

//2(b)
languageArray.splice(3, 0, "Java");

//2(c)
languageArray.shift();

//2(d)
languageArray.unshift("Scala", "Swift");

//2(d)
languageArray.splice(5, 1, "Go", "Rust");

//// ******* QUESTION 3 SOLUTION STARTS HERE ******* //////////////////

//After calling the function, the value of fruit will be as follows;
// fruit = ["apple", "mango", "orange"];
//This can be seen from the code below
let fruit = ["apple", "mango", "banana"];
function changeFruit(fruit) {
  fruit[2] = "orange";
  return fruit;
}
changeFruit(["apple", "mango", "banana"]);

//// ******* QUESTION 4 SOLUTION STARTS HERE ******* //////////////////
function evaluateArray(array) {
  return Math.max(...array);
}
console.log(evaluateArray([4, 5, 10, -2]));

//// ******* QUESTION 5 SOLUTION STARTS HERE ******* //////////////////
function valTimesIndex(numArray) {
  return numArray.map(function (item, index) {
    return item * index;
  });
}

console.log(valTimesIndex([1, 2, 3]));
console.log(valTimesIndex([5, 10, 15]));
