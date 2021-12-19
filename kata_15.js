const organizeInstructors = function(instructors) {
  let output = {};
  for (const obj of instructors){
    //console.log(input[1].course)
   // output[obj.course] = output

    if (obj.course in output){
      // if ('key' in myObj)
      //instructor.course.push(instructor.name)
      console.log(obj.course)
      output[obj.course].push(obj.course);
    }
    else{
      output[obj.course] = [obj.name]
      // = [obj.name]    --> shorthand for: create array + add 1 item (obj.name)
      // output[obj.course] = [];
      // output[obj.course].push(obj.name)
    }
  }
  return output
 
};



const input = [
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]
console.log(organizeInstructors(input));

// console.log(organizeInstructors([
//   {name: "Brendan", course: "Blockchain"},
//   {name: "David", course: "Web"},
//   {name: "Martha", course: "iOS"},
//   {name: "Carlos", course: "Web"}
// ]));


