'use strict';
function map_to_even(collection_a){
  var result=collection_a.map(function (a) { return a*2;});
  return result;
}
module.exports = map_to_even;
