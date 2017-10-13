'use strict';

function hybrid_operation(collection) {
  let collections=collection.map(a=>{ return a*3+2;})
  let sum = collections.reduce((previous, current) => current += previous);
  return sum;
}

module.exports = hybrid_operation;

