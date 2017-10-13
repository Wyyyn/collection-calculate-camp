'use strict';

function choose_common_elements(a,b) {
  var result = a.filter(function(v){ return b.indexOf(v) > -1 });
  //let result = a.filter(v => b.includes(v));
  return result;
}

module.exports = choose_common_elements;
