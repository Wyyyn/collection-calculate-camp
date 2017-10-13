'use strict';
var calculate_average = function(collection){
  let avg=(collection.reduce((previous,current) => current+=previous))/collection.length;
  return Math.ceil(avg);

};
module.exports = calculate_average;
