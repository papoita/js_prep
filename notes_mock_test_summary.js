//This was crerated to summarize the first mock test LGL
const sum = function (arr) {
  /* IMPLEMENT ME */
  let sumed = 0;
  for (let i = 0; i < arr.length; i++) {
    sumed += arr[i];

    //console.log(sumed);

  }
  return sumed;
};
console.log(sum([6, 2, 3, 4, 9, 6, 1, 0, 5]));

const mean = function (arr) {
  /* IMPLEMENT ME */
  if (arr.length > 0) {
    let sumed = 0;
    for (let i = 0; i < arr.length; i++) {
      sumed += arr[i];

      //console.log(sumed);

    }
    sumed = (sumed / arr.length);
    //console.log(sumed);
    return (sumed);
  }
  return null;
};

const min = function (arr) {
  /* IMPLEMENT ME */
  arr.sort(function (a, b) {
    return (a - b);

  });
  //console.log(arr[0]);
  return (arr[0]);
};
const max = function (arr) {
  /* IMPLEMENT ME */
  arr.sort(function (a, b) {
    return (b - a);

  });
  //console.log(arr[0]);
  return (arr[0]);
  /* IMPLEMENT ME */
};

const range = function (arr) {
  /* IMPLEMENT ME */
  let arrMax = max(arr);
  //console.log(arrMax);


  let arrMin = min(arr);
  //console.log(arrMin);

  let arrRange = arrMax - arrMin;
  //console.log(arrRange);
  return arrRange;

};

const median = function (arr) {
  /* IMPLEMENT ME */
  let sortedArr = arr.sort(function (a, b) {
    return a - b;
  });
  let indexMedian = Math.floor(sortedArr.length / 2);
  if (sortedArr.length % 2) {
    return sortedArr[indexMedian];


  } else {
    return (sortedArr[indexMedian - 1] + sortedArr[indexMedian]) / 2;
  }
};

const mode = function (arr) {
  const obj = {};
  arr.forEach(number => {
    if (!obj[number]) {
      obj[number] = 1;
    } else {
      obj[number] += 1;
    }
  });
  //console.log(obj);
  let highestValue = 0;
  let highestValueKey = 0;

  for (let key in obj) {
    const value = obj[key];
    if (value > highestValue) {
      highestValue = value;
      highestValueKey = key;
    }
  }
  return Number(highestValueKey);
};

const round = function (number) {
  return Math.round(number * 100) / 100;

};
const populationMean = function (arr) {
  /* IMPLEMENT ME */
  if (arr.length > 0) {
    let sumed = 0;
    for (let i = 0; i < arr.length; i++) {
      sumed += arr[i];

      //console.log(sumed);

    }
    sumed = (sumed / arr.length);
    //console.log(sumed);
    return (sumed);
  }
  return null;
};



const stdev = function (arr) {
  let popMean = populationMean(arr);
  //console.log("popmean", popMean);
  let arrayDeviation = [];

  for (let number of arr) {

    // console.log(number);
    let deviation = (number - popMean) * (number - popMean);
    //console.log("deviation", deviation);
    arrayDeviation.push(deviation);
  }
  //console.log(arrayDeviation);

  let variation = populationMean(arrayDeviation);
  //console.log(variation);
  let standardDev = round(Math.sqrt(variation));
  //console.log(standardDev);
  return standardDev;
};
stdev([6, 2, 3, 4, 9, 6, 1, 0, 5]);
//stdev([1, 2, 3]);
