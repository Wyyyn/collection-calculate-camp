'use strict';
var number_map_to_word = function(collection){
  var result=collection.map(function (a) { return String.fromCharCode(a+96);});
  return result;
};

module.exports = number_map_to_word;
