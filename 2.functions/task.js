"use strict"
// Задание 1
function getArrayParams(arr) {
  let max = - Infinity;
  let min = Infinity;
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i += 1)  {
    sum += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    } 
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}
// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
