'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  let result=collection_a.filter( v =>(collection_b.includes(x=> (v%x === 0))));
  return result;
}

module.exports = choose_divisible_integer;
