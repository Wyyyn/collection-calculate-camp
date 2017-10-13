'use strict';

function compute_average(collection) {
  let sum = collection.reduce((previous, current) => current += previous);
  let avg = sum / collection.length;
  return avg;
}

module.exports = compute_average;

