'use strict';

function collect_min_number(collection) {
  collection.sort(function(a,b){return a<b?1:-1});
  return collection[collection.length-1];
}

module.exports = collect_min_number;

