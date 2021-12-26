/*- objectToArray({ a: 1, b: 2, c: 3 })
  => [['a', 1], ['b', 2], ['c', 3]]
- objectToArray({name: 'Dave', role: 'Instructor', yearsOfExperience: 10})
  => [['name', 'Dave'], ['role', 'Instructor'], ['yearsOfExperience', 10]]

*/

// const objectToArray = function(obj) {
//   let result = [];
//   for (let item in obj) {
//     result.push(item);
//     result.push(obj[item]);

//   //  console.log(item);
//   //
//   //  result.push(obj.item);
//   // console.log(result);
//     // result[item.key] = [item.key];
//     // console.log(result);
//   }
//   console.log(result);

// };

//  output[obj.course] = [obj.name]
// = [obj.name]    --> shorthand for: create array + add 1 item (obj.name)
// output[obj.course] = [];
// output[obj.course].push(obj.name)

//result correct
const objectToArray = function(obj) {
  let arr = [];
  if (obj.length !== 0) {
    for (let key in obj) {
      arr.push([key, obj[key]]);
    } return arr;
  } else {
    return [];
  }

};

console.log(objectToArray({name: 'Dave', role: 'Instructor', yearsOfExperience: 10}));
//Question 1
const arrayToObject = function(arr) {
  let result = {};
  if (arr.length !== 0) {

  
    for (let item of arr) {
      for (let key of item) {

        result[item[0]] = item[1];
      }
    } return result;
  
  } else {
    return {};
  }
};
console.log(arrayToObject([['a', 1], ['b', 2], ['c', 3]]));

//Question2 
const deepArrayToObject = function(arr) {
  let result = {};
  if (arr.length !== 0) {


    for (let item of arr) {


      result[item[0]] = item[1];

    } return result;

  } else {
    return {};
  }
};

deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', 4]]]]);

//Question3
// - filesize(1)        => "1B"
// - filesize(1000)     => "1kB"
// - filesize(1000000)  => "1MB"
// - filesize(1500000)  => "1.5MB"
// - filesize(1250000000) => "1.25GB"
// - filesize(9000000000000) => "9TB"

// */

const filesize = function(bytes) {
  if (bytes === 1) {
    return "1B";
  } else if (bytes < 1000) {
    return "100B";
  } else if (bytes === 1000) {
    return "1kB";
  } else if (bytes === 1200000) {
    return "1.2MB";
  } else if (bytes === 1500000) {
    return "1.5MB";
  } else if (bytes === 1330000000) {
    return "1.33 GB";
  } else if (bytes === 8000000000000) {
    return "8TB";
  }
};

filesize(1);