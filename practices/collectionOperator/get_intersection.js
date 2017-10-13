'use strict';

function get_intersection(a,b) {

  var result = b.filter(function(v){ return a.indexOf(v) > -1 })
  //let result = a.filter(v => b.includes(v));
  return result;
}

module.exports = get_intersection;
