//Kata1
let sumLargestNumbers = function(data) {
  let sortedNum = data.sort(function(a, b) {
    return b - a;
  });
  return sortedNum[0] + sortedNum[1];
};


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
//kata2
const conditionalSum = function(values, condition) {

  let array = 0;

  for (let i = 0; i < values.length; i++) {
    if (condition === "even" && values[i] % 2 === 0) {
      array += values[i];
    } else if (condition === "odd" && values[i] % 2 !== 0) {
      array += values[i];
    }
  }
  return array;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

//kata 3
const numberOfVowels = function(data) {
  console.log(data);
  let vowels = [];
  for (let i = 0; i < data.length; i++) {
    //console.log(data[i]);

    if (data[i] === "a" || data[i] === "e" || data[i] === "i" || data[i] === "o" || data[i] === "u") {
      //console.log(data[i]);
      //vowelArray = vowelArray.push(data[i]);
      vowels += data[i];
    }
  } return vowels.length;
};


console.log(numberOfVowels("orange")); //3
//kata 4
const instructorWithLongestName = function(instructors) {
  //let instructorName = [];
  let longestName = instructors[0];
  console.log(instructors[0].name);
  console.log(instructors[0].name.length);

  for (let i = 0; i < instructors.length; i++) {
    if (instructors[0].name.length < instructors[i].name.length) {

      longestName = instructors[i].name;
      console.log(longestName);
      console.log('we got here');
      console.log(instructors[i]);
      return instructors[i];
      
    }

  }

};
console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));

//kata5
//%20 encoded string to replace white spaces
const urlEncode = (text) => {
  let encodedText = " ";
  text = text.trim();
  for (let i = 0; i < text.length; i++) {
    if (text[i] == " ") {
      encodedText = encodedText + "20%";
      //console.log("Am i doing this loop");
//console.log(encodedText);
    } else {
      encodedText += text[i];
      //console.log("Am i doing this second loop");
    }

  } return encodedText;
}
console.log(urlEncode("blue is greener than purple for sure"));

//kata 6
const whereCanIPark = function(spots, vehicle) {
  const results = [];
  for (let row = 0; row < spots.length;  row++) {
    for (let col = 0; col < spots[row].length;  col++) {
      const value = spots[row][col];
   
      if (value === value.toUpperCase()) {
        //console.log(`There is a ${value} at space ${row}, ${col}`);
        if ((value === "R" || value === "M" || value === "S") && vehicle === "motorcycle") {
          results.push([col, row]);
  

        }
      }
    }
    
  }
  
  return results;
};


console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'R', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
));

///kata 7

const checkAir = function (samples, threshold) {

};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));