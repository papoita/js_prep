const organizeData = (receivedData) => {
	const answer = {};

	for (let obj of receivedData) {
		if (answer[obj.type]) {
			//if (key exists), do this: 
      console.log('The type is:    ')
			console.log(typeof(answer[obj.type]));
			answer[obj.type].push(obj.data);
      console.log(answer);
		} else {
      //array creation
			answer[obj.type] = [obj.data];
		}
	}

	return answer;
};

const listOfReceivedData = [
  {type: "astro", data: "Saturn Data"},
  {type: "bio", data: "Space Potatoes"},
  {type: "physics", data: "Lagrange Points"},
  {type: "bio", data: "OMG Tardigrades"},
  {type: "physics", data: "Material reflectivity"},
  {type: "astro", data: "Mercury is not the hottest"},
]
 
organizeData(listOfReceivedData);