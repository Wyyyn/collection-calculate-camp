'use strict';

function double_to_one(collection) {

  return Array.prototype.concat.apply([], collection);
}

module.exports = double_to_one;
