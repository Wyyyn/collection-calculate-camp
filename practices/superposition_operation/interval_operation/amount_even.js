'use strict';

function amount_even(collection) {

  let oushu=collection.filter(a=>{return a%2 === 0;});
  let sum = oushu.reduce((previous, current) => current += previous);
  return sum;
}

module.exports = amount_even;
