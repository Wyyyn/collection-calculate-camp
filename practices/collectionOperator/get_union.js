'use strict';

function get_union(a,b) {
  //在这里写入代码
  let union = Array.from(new Set(a.concat(b)));
  return union;
}

module.exports = get_union;

