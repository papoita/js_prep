
const checkAir = function (samples) {
  let numDirty = 0;
  for (let sample of samples){
    if(sample === "dirty"){
      numDirty += 1;
    } 
  } 
  let percentage = (numDirty / samples.length);
  return percentage;
};

const airClassifier = function(threshold, percentage){
  if(percentage > threshold){
    return "poluted"
  } else {
    return "clean";
  }
}

const percentage = checkAir (['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'])
const classified = airClassifier(0.3, percentage);



console.log(classified);




//this is refactoring and callback
// const checkAir = function (samples, cb) {
//   let numDirty = 0;
//   for (let sample of samples){
//     if(sample === "dirty"){
//       numDirty += 1;
//     } 
//   } 
//   let percentage = (numDirty / samples.length);
//   return cb(percentage);
//   //return percentage;
// };

// const airClassifier = function(percentage, threshold){
 
//   if(percentage > threshold){
//     return "poluted"
//   } else {
//     return "clean";
//   }
// }


// const classification = checkAir(
//   ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'], p => airClassifier(p, 0.3));

// //const classified = airClassifier(percentage, 0.3);

// console.log(classification);





// const checkAir = function (samples) {
//   let numDirty = 0;
//   for (let sample of samples){
//     if(sample === "dirty"){
//       numDirty += 1;
//     } 
//   } 
//   let percentage = (numDirty / samples.length);
//   return percentage;
// };

// const airClassifier = function(percentage, threshold){
 
//   if(percentage > threshold){
//     return "poluted"
//   } else {
//     return "clean";
//   }
// }


// const percentage = checkAir(
//   ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty']);

// const classified = airClassifier(percentage, 0.3);

// console.log(classified);


// console.log(checkAir(
//   ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
//   0.3
// ));