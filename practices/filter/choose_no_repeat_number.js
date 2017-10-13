'use strict';

function choose_no_repeat_number(collection) {
  let result=Array.from(new Set(collection));
  return result;
}

module.exports = choose_no_repeat_number;
