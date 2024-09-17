// Add element(s) to the end of an array.
var typesOfOranges = ["Navel", "Clementine", "Valencia", "Bergamot"];
typesOfOranges.push("Jaffa");
console.log(typesOfOranges);

// Remove an element from the end of an array.
var typesOfOranges = ["Navel", "Clementine", "Valencia", "Bergamot"];
typesOfOranges.pop();
console.log(typesOfOranges);

// Add element(s) to the beginning of an array.
var typesOfOranges = ["Navel", "Clementine", "Valencia", "Bergamot"];
typesOfOranges.unshift("Satsuma", "Sour");
console.log(typesOfOranges);

// Remove an element from the beginning of an array.
var typesOfOranges = ["Navel", "Clementine", "Valencia", "Bergamot"];
typesOfOranges.shift();
console.log(typesOfOranges);

// Remove elements in an array at any index position.
var typesOfOranges = ["Navel", "Clementine", "Valencia", "Bergamot"];
typesOfOranges.splice(1, 2);
console.log(typesOfOranges);

// Add elements in an array at any index position without deleting or replacing.
var typesOfOranges = ["Navel", "Clementine", "Valencia", "Bergamot"];
typesOfOranges.splice(3, 0, "Blood", "Seville");
console.log(typesOfOranges);

//Replace element(s) in an array at any index position.
var typesOfOranges = ["Navel", "Clementine", "Valencia", "Bergamot"];
typesOfOranges.splice(2, 1, "Hamlin");
console.log(typesOfOranges);

// Make a copy of a portion of an array.
var typesOfOranges = ["Navel", "Clementine", "Valencia", "Bergamot"];
console.log(typesOfOranges.slice(1));
console.log(typesOfOranges.slice(1, 3));

// Create a new array.
var typesOfOranges = ["Navel", "Clementine", "Valencia", "Bergamot"];
var newCitrus = typesOfOranges.slice(0, 1);
newCitrus.push("Lemon", "Pomelo");
console.log(newCitrus);
console.log(typesOfOranges);

// Identify the number of elements in an array.
var typesOfOranges = ["Navel", "Clementine", "Valencia", "Bergamot"];
console.log(typesOfOranges.length);

// Find out if an array has a particular element.
var typesOfOranges = ["Navel", "Clementine", "Valencia", "Bergamot"];
console.log(typesOfOranges.includes("Clementine"));
console.log(typesOfOranges.includes("Hamlin"));

// Find the index of the FIRST occurance of an element in an array.
var numOfOranges = [12, 30, 4, 12, 4, 8, 25, 8];
var num = numOfOranges.indexOf(4);
console.log(num);

// Join two or more arrays.
var typesOfOranges = ["Navel", "Clementine", "Valencia"];
var typesOfGrapefruit = ["Marsh", "Flame", "Ruby Red"];
var citrus = typesOfOranges.concat(typesOfGrapefruit);
console.log(citrus);

// or
var typesOfOranges = ["Navel", "Clementine", "Valencia"];
var typesOfGrapefruit = ["Marsh", "Flame", "Ruby Red"];
var citrus = [...typesOfOranges, ...typesOfGrapefruit];
console.log(citrus);

// Return a new array with elements from the original array that pass a specific condition.
var numOfOranges = [12, 30, 4, 12, 4, 8, 25, 8];
var filterOranges = numOfOranges.filter(function (item) {
  return item > 10;
});
console.log(filterOranges);

// Check which elements match a string and produce a new array.
var typesOfOranges = ["Navel", "Clementine", "Valencia", "Bergamot"];
var filterOranges = typesOfOranges.filter(function (item) {
  return item.includes("en");
});
console.log(filterOranges);

// Return an array with all elements modified by a callback function.
var numOfOranges = [12, 30, 4, 12, 4, 8, 25, 8];
var doubleOranges = numOfOranges.map(function (item) {
  return item * 2;
});
console.log(doubleOranges);

// or
var typesOfOranges = ["Navel", "Clementine", "Valencia", "Bergamot"];
var eat = typesOfOranges.map(function (item) {
  return `I want to eat a ${item}.`;
});
console.log(eat);

// Split a string into substrings and return these as elements in an array.
var fruit = "navel orange";
console.log(fruit.split(" "));
console.log(fruit.split(""));
console.log(fruit.split());

// Join all the array elements into a string.
var alphabet = ["a", "b", "c"];
console.log(alphabet.join());
console.log(alphabet.join(""));
console.log(alphabet.join("-"));
console.log(alphabet.join("?"));
