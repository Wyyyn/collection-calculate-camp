'use strict';

function hybrid_operation_to_uneven(collection) {
  let collections=collection.map(a=>{return a*3+2;});
  let result=collections.filter(a=>{return a%2 === 1;});
  return result;
}

module.exports = hybrid_operation_to_uneven;

