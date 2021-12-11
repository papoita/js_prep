/** @format */

//1. write a function that take in 2 string parameters
//returns a string
const parseMessage = (origin, message) => {
	return `${origin}: ${message}`;
};

parseMessage("Mission Control", "Hello there!");

//2. takes in object and returns a string
const generateAstronautTag = (astronaut) => {
	const { firstName, lastName, nickname, prefix } = astronaut;
	return `${prefix}: ${firstName} "${nickname}" ${lastName}`;
};

// const generateAstronautTag = ({ firstName, lastName, nickname, prefix }) => `${prefix}: ${firstName} "${nickname}" ${lastName}`;

//3. gauge object return tru if value is between min and max and false if it is outside
const checkGaugeStatus = (gauge) => {
	const min = gauge.min;
	const max = gauge.max;
	const current = gauge.current;

	if (current > min && current < max) {
		return true;
	} else {
		return false;
	}
};

//4. toggle object change the value of the property isOn between true and false and return and updated object
// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.
const switchToggle = (toggle) => {
	// Code here!
	toggle.isOn = toggle.isOn ? false : true;
	return toggle;
};

//5. add property to an object
const addJobToAstronaut = (astronaut, job) => {
	astronaut["job"] = job;
	return astronaut;
};

//6. add object to an array
const addAstronautToRoster = (roster, astronaut) => {
	roster.push(astronaut);
	return roster;
};

//7. convert temp from Fahrenheit to Celcius
// convert windspeed from miles/hour to meters/second and round before storing
const storeWeatherConditions = (
	temperature,
	condition,
	windSpeed,
	windDirection
) => {
	const weather = {
		temperature,
		windSpeed,
		windDirection,
		condition,
	};

	const FToC = (temperature - 32) * (5 / 9);
	weather.temperature = Math.round(FToC);

	weather.windSpeed = Math.round(windSpeed * 0.44704);

	return weather;
};

//8. amount of items in array
const countActiveAstronauts = (roster) => {
	return roster.length;
};

//9. takes in array and return array that just returns one property for each object

const listAstronautJobs = (roster) => {
	const jobArray = [];
	for (let astronaut of roster) {
		jobArray.push(astronaut.job);
	}
	return jobArray;
};

//10. array of weather objs and return a rounded average of one poperty. unkown amount of entries so use loops
const averageWindSpeed = (weatherEntries) => {
	let answer = 0;
	for (let obj of weatherEntries) {
		answer += obj.windSpeed;
	}
	return Math.round(answer / weatherEntries.length);
};

//11. input  array of objs and date as string
// return update date property with empty date and return updated array of objs
const bookFreePlatform = (platformList, missionDate) => {
	for (let obj of platformList) {
		if (!obj.bookDate) {
			obj.bookDate = missionDate;
			return platformList;
		}
	}
};

//12. take in an array of objects containing a sender and a message as a parameter. The function will then parse a message from each object, add it to an array then return the built array.
const parseMessage = (object) => {
	let string = `${object.origin}: ${object.message}`;
	return string;
};

const parseTranscripts = (messages) => {
	let answer = [];
	for (let obj of messages) {
		answer.push(parseMessage(obj));
	}
	return answer;
};

//13.take in an array of objects containing a gauge reading (min, max, current). The function will then check if the gauge current value is within spec (between min and max) and check the next gauge. If one of the values is outside the spec, return false, if they are all ok, return true.
const checkAllGauges = (gaugeList) => {
	for (let obj of gaugeList) {
		if (obj.current < obj.min || obj.current > obj.max) {
			return false;
		}
	}
	return true;
};

//14. take in array of objs containing switches isOn property if true for every switch in the list
//return updated array
const switchAllTogglesOn = (toggleList) => {
	for (let obj of toggleList) {
		if (!obj.isOn) {
			obj.isOn = true;
		}
	}
	return toggleList;
};

//15.in a launch date and a mission name as strings.Calculate the difference between two dates in days and return an object containing the name of the mission and a rounded day difference.
//Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.
//const launchDate = "2021-12-12"
// const fakeToday = "2021-12-01"
// const missionName = "Moon visit"

const timeRemaining = (launchDate, missionName, fakeToday) => {
	const today = fakeToday || new Date(); // Do not alter this line!
	console.log(today);
	console.log(new Date(launchDate));
	const daysRemaining = (new Date(launchDate) - new Date(today)) / 86400000;
	const result = { missionName, daysRemaining };
	return result;
};

//16.take in two position objects. Calculate the average speed from the two positions and return the average speed rounded to the first decimal point.

// Each object contains the altitude in meters, and a time stamp in seconds.
const getAverageSpeed = (firstPosition, secondPosition) => {
	const distance = secondPosition.altitude - firstPosition.altitude;
	const time = secondPosition.time - firstPosition.time;

	const average = distance / time;
	const answer = Math.round(average * 10) / 10;

	return answer;
};

//17. take in an array of toggle objects and a specific toggle name. The goal is to switch only the specific toggle, without affecting the other toggles and then return the updated array.
const switchSpecificToggle = (toggleList, specificToggle) => {
	for (let obj of toggleList) {
		if (obj.name === specificToggle) {
			obj.isOn = true;
		}
		return toggleList;
	}
};

//18. take in an array of lunch choices (strings) and return the choice as a string with the most votes.
// There is always two lunch choices, and always an odd number of astronauts!

const chooseLunchWinner = (listOfChoices) => {
	let dinnerOptions = {};
	for (const dinner of listOfChoices) {
		if (!dinnerOptions[dinner]) {
			dinnerOptions[dinner] = 1;
		} else {
			dinnerOptions[dinner] += 1;
		}
	}
	let foodChoice = " ";
	let choices = 0;
	for (const count in dinnerOptions) {
		if (dinnerOptions[count] > choices) {
			foodChoice = count;
			choices = dinnerOptions[count];
		}
	}
	return foodChoice;
};
//or
//using arrays
const chooseLunchWinner = (listOfChoices) => {
	let choice1 = [];
	let choice2 = [];

	for (let choice of listOfChoices) {
		if (!choice1.length) {
			choice1.push(choice);
		} else if (choice === choice1[0]) {
			choice1.push(choice);
		} else if (!choice2.length) {
			choice2.push(choice);
		} else if (choice === choice2[0]) {
			choice2.push(choice);
		}
	}
	if (choice1.length > choice2.length) return choice1[0];
	return choice2[0];
};
//or
const chooseLunchWinner = (listOfChoices) => {
	const choice1 = listOfChoices[0];
	let choice2;
	let choice1Count = 0;
	let choice2Count = 0;
	for (let lunch of listOfChoices) {
		if (lunch === choice1) {
			choice1Count++;
		} else {
			choice2 = lunch;
			choice2Count++;
		}
	}
	return choice1Count > choice2Count ? choice1 : choice2;
};
//or

const chooseLunchWinner = (listOfChoices) => {
	const lunch1 = [listOfChoices[0]];
	const lunch2 = [];

	for (let lunch of listOfChoices) {
		if (lunch1[0] === lunch) {
			lunch1.push(lunch);
		} else {
			lunch2.push(lunch);
		}
	}

	if (lunch1.length > lunch2.length) {
		return lunch1[0];
	} else {
		return lunch2[0];
	}
};

//19. take in a list of data entries in the shape of an array of objects. The function will then organize and return the entries by type and store each bit of data (string) in each list, in the shape of an object containing arrays.
//this would give an object of how many types of each are there
//create the output obj
// iterate over the array of inputs
//every new input not already in th eoutput obj, we want to create and entry where the key is type and the value is an empty list

///iterate again over the array
//for every element, append the data to the matching type key

//return the structure

const organizeData = (receivedData) => {
	const objTypes = {};
	for (const obj of receivedData) {
		if (!receivedData[type]) {
			objTypes[type] = 1;
		} else receivedData[type] += 1;
	}

	return objTypes;
};

//but if you just want to include data in each obj type
const organizeData = (receivedData) => {
	const answer = {};

	for (let obj of receivedData) {
		if (answer[obj.type]) {
			answer[obj.type].push(obj.data);
		} else {
			answer[obj.type] = [obj.data];
		}
	}

	return answer;
};
