/** @format */
/*TODO*/
//Tests for lhl
//primitive dataTypes
//asynchronous functions
//good fomratting linting
//follow code along
//arrays
//objects
//use the music library as an example
//give analogies that connect programming to the real world. Also, explaining in simple terms.
//why do we use objects?
// what is a DOM?
// what is the difference between non-primitive and primitive data types? why is this important to know?
// what is the output and the order of output? (async)
// identify how you would improve this code?

//other questions
// build a function that returns the unique value?
// build a function that returns a list off all the artists names with their rank in the billboard top 10?
// build a function called keysMatch() which will be given two objects and an array of strings.

/*Solved*/

////primitive dataTypes
// 6 primitive datatypes: building blocks
// undefined
// null
// Boolean
// String
// Number
// Symbol (ES6)
// Object
// Each primitive has also a corresponding object construvtor

//coersion
// == vs ===
// == will take dif data types and one of them will be converted to an equivalent
// such as String.length where some string is coersed to a string object in order to access the property length

//linting
// analyizing code to flag programming errors, bugs, stylistic errors and suspicious constructs

//Asynchronous functions

//implement sum

const sum = (arr) => {
	let sumed = 0;
	for (let i = 0; i < arr.length; i++) {
		sumed += arr[i];
	}
	return sumed;
};
console.log(sum([0, 2, 3]));

//implement mean
//fgdfgdfgdf
const mean = (arr, cb) => {
	if (!arr.length > 0) {
		return null;
	}
	let mean = 0;
	if (arr.length) {
		const sumed = cb(arr);
		mean = sumed / arr.length;
	}
	return mean;
};

console.log(mean([0, 2, 3], sum));
