'use strict';
var calculate_median = function(collection){
  if(collection.length%2 === 0){
    var median=(collection[(collection.length/2)]+collection[(collection.length/2-1)])/2;
    median=Math.ceil(median);
  }
  else{
    var median=collection[parseInt(collection.length/2)];
  }
  return median;

};
module.exports = calculate_median;
