//Summary of test 1, week 4, Nov 13, 2021
// Question0
// Your function should take in a number, and a boolean. The number will be the temperature in degrees, and the boolean will be whether to convert from C to F (true) or F to C (false). Your answer should be rounded to one decimal place, and returned as a Number, not a string.

// If the first argument is not a number, return NaN for the result.

// Examples:

// - tempConverter(32, true) returns 89.6 as a result
// - tempConverter(32, false) returns 0.0 as a result
// - tempConverter(98.6, false) returns 37 as a result
// - tempConverter("12", <anything>) returns NaN as a result

// */

const tempConverter = function(value, cToF) {
  let fahrenheit = 0;
  let celcius = 0;
  if (typeof value === "number") {
    if (cToF) {
      fahrenheit = (value * 9) / 5 + 32;
      console.log(fahrenheit);
      return fahrenheit;
    } else if (!cToF) {
      celcius = ((value - 32) * 5) / 9;
      let roundedcelcius = Math.round(celcius * 10) / 10;
      console.log(celcius);
      return roundedcelcius;
    }
  } else {
    return NaN;
  }
};

/* Question 01

Build a function called keyMatcher() which, when passed two objects and a string, will use the string to look up the key-value pair in each object and compare the values. If the two values are explicitly equal to each other, return true, otherwise return false if either the values or not the same, or both objects do not have that key.

Examples:

- keyMatcher({a: 1, b: 2, c: 3}, {here: 3, is: 2, a: 1, silly: 0, example: -1}, 'a') returns true (since the value and type are the exact same)
- keyMatcher({apple: "red", banana: "yellow", cherry: "red"}, {apple: "green", banana: "brown", cherry: "black"}, "apple") returns false since the values are completely different ("red" vs "green")
- keyMatcher({a: 1, b: 2, c: 3}, {a: "1", b: "2", c: "3"}, 'c') returns false since the values are different types (3 vs "3")
- keyMatcher({a: 1, b: 2, c: 3}, {d: 4, e: 5, f: 6}, 'b') returns false since b is not in the second object

*/
const keyMatcher = function(firstObj, secondObj, key) {
  for (let key1 in firstObj) {
    if (key1 === key && firstObj[key1] === secondObj[key1]) {
      return true;
    }
  }
  return false;
};

/* Question 02

Implement a function called countWhich() which will take in a list of items and a callback, and it will return the number of elements which return a truthy value from the callback function.

If the first argument is not an array, our function should return false instead of a number.

Examples:

- countWhich([1, 2, 3, 4, 5], function(num) { return (num > 4); }) returns 1 (only matches 5)
- countWhich(["apple", "banana", "cherry"], function(fruit) { return fruit[0] === "a"; }) returns 1 (only matches apple)
- countWhich([10, 20, 30, 40, 50], function(num) { return num % 7 === 0; }) returns 0 (none of the numbers are divisible by 7)
- countWhich(["apple", "banana", "cherry"], function(fruit) { return fruit.length > 5; }) returns 2 ("apple" is shorter than 6 characters)
- countWhich([], function(x) { return x > 10 }) returns 0
- countWhich("This should fail", function(word) { return true; }) returns false (because the first argument is not an array)

*/

const countWhich = function(list, cb) {
  let truthyTimes = 0;
  if (Array.isArray(list)) {
    for (let num of list) {
      //console.log(cb(num));
      if (cb(num)) {
        truthyTimes += 1;
        //console.log(truthyTimes);
      }
    }
    return truthyTimes;
    //return cb.length;

    // console.log(list);
    // console.log(cb());
  }
  return false;
  /* IMPLEMENT ME */
};

console.log(countWhich([2, 4, 5, 7, 8, 10, 11], (x) => x % 2 === 0));

/* Question 03

Implement the function as defined below.

Many programming languages have a range() functionality which will generate an array of numbers that increment from either 0 or 1 up to the number of digits requested. For example, range(10) might return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] or it might return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] depending on the implementation. Some even allow you to control the direction.

Unfortunately, JavaScript doesn't have a built-in range() function, so we want you to build one. Build out the function range() so that it takes three parameters:

1. The number of integers to generate
2. A boolean for whether to skip 0 or not (true: skip zero)
3. A boolean for whether the range should be in reverse/decreasing order or regular/increasing order (true: reverse/decreasing order)

If a non-number is passed in for the first argument, return an empty array.

Pro Tip: Remember to work incrementally. Start off just implementing the false and false scenario for the second and third parameters. In other words, focus on the zero-based, ascending range first. Work on edge cases at the very end (such as passing in a string instead of a number, as shown in the final example below.)

**Examples:**

- range(10, false, false) should return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
- range(10, true, false) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
- range(10, true, true) should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
- range(10, false, true) should return [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
- range(3, true, false) should return [1, 2, 3]
- range(0, false, <anything>) should return [0]
- range(10) should do the same thing as range(10, false, false)
- range(10, true) should do the same thing as range(10, true, false)
- range("2", <anything>, <anything>) should return []
*/

const range = function(count, skipZero, descending) {
  let newArray = [];
  if (typeof count === "number" && !skipZero && !descending) {
    for (let counter = 0; counter < count; counter++) {
      newArray.push(counter);
    }
    //console.log(newArray);
    return newArray;
  } else if (typeof count === "number" && skipZero && !descending) {
    for (let counter = 1; counter <= count; counter++) {
      //counter += counter;
      newArray.push(counter);
    }
    //console.log(newArray);
    return newArray;

    //     for (let i = count - 1; i > 0; i--);
    //     return count--;//if(skipZero && !descending)
  } else if (typeof count === "number" && skipZero && descending) {
    for (let counter = count; counter >= 1; counter--) {
      //counter += counter;
      newArray.push(counter);
    }
    //console.log(newArray);
    return newArray;
  } else if (typeof count === "number" && !skipZero && descending) {
    for (let counter = count - 1; counter >= 0; counter--) {
      //counter += counter;
      newArray.push(counter);
    }
    //console.log(newArray);
    return newArray;
  } else if (typeof count !== "number") {
    return [];
  }
};

/* Question 04

Implement the function as defined below.

Given an array of values, the minmax() function will return an array that contains the minimum and maximum values in the array, always with minimum at index 0 and maximum at index 1. For the purposes of this question, you are not allowed to use Math.max() or Math.min().

The array can be a list of lower-cased strings instead of numbers. In this case, min is the string that would be sorted first alphabetically and max is the string that would be sorted last alphabetically ("a" < "b", while "ab" > "aa", and so on).

Mixed-type (strings and numbers) arrays are not of concern to us (meaning, do not worry about this situation).

Examples:

- minmax([1, 2, 3, 4, 5]) returns [1, 5]
- minmax([90, 89, 123, 3]) returns [3, 123]
- minmax(["apple", "banana", "canada"]) returns ["apple", "canada"]
- minmax([]) returns [undefined, undefined]

*/

const minmax = function(list) {
  let min = 0;
  let max = 0;
  list.sort(function(a, b) {
    return b - a;
  });
  max = list[0];
  let lastindex = list.length - 1;
  // console.log(lastindex);
  min = list[lastindex];
  console.log(max);
  console.log(min);
  return [min, max];
};

console.log(minmax([1, 2, 3, 4, 5]));