'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let arr=Array.prototype.concat.apply([], collection);
  let result=Array.from(new Set(arr));
  return result;
}

module.exports = double_to_one;
