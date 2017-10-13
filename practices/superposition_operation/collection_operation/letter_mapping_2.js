'use strict';

function average_to_letter(collection) {

  let sum = collection.reduce((previous, current) => current += previous);
  let avg = Math.ceil(sum / collection.length);
  return String.fromCharCode(avg+96);
}

module.exports = average_to_letter;

