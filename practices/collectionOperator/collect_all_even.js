'use strict';

function collect_all_even(collection) {
  var arr= [];
  arr=collection.filter(a=>{
    if(a%2 === 0)
      return a;
    })
  return arr;
}


module.exports = collect_all_even;
