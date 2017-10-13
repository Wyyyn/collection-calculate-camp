'use strict';

function average_uneven(collection) {
  let jishu=collection.filter(a=>{return a%2 === 1;});
  let avg = (jishu.reduce((previous, current) => current += previous))/jishu.length;
  return avg;
}

module.exports = average_uneven;
