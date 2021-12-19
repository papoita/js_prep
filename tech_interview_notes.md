//first tech interview with Yuvraj Singh
DEc 11, 2021

1. revise code for linting, formatting mistakes, wrong declarations, if else no curly braces
it was on a nested fo in loop 
2. 
Asynchronous code when prinitng console.logs, understand which functions are being called at which time and whoch are not asynchronous

3. find key in object and return true if keys are present in both objects

use the strings to look up the key-value pair in each object and compare the values. If all the values are explicitly equal to each other, return true, otherwise return false


const keyChecking = function (obj1, obj2, keys){
  for(obj1[key] of obj1){
    if(obj1[key] !== obj2[key]){return false
  }else{
    return true
  }

}

const obj1 = {a:1, b:2}
const obj2 = {a:1, c:1}
const keys = [a]

const keyChecking = function (obj1, obj2, keys){
for (let key of keys){
  if(obj1[key] !== obj2[key]){
    return false;
  }
    return true;
  }
}


