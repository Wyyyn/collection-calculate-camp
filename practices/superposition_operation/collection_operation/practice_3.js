'use strict';

function hybrid_operation_to_uneven(collection) {
  let jishu=collection.filter(a=>{return a%2 === 1;});
  let collections=jishu.map(a=>{return a*3+5;});
  let sum = collections.reduce((previous, current) => current += previous);
  return sum;
}

module.exports = hybrid_operation_to_uneven;

