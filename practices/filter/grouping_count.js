'use strict';

function grouping_count(collection) {

  let no_repeat=Array.from(new Set(collection));
  let num=[];
  let result=[];
  for(let i=0;i<no_repeat.length;i++) {
    num[i]=0;
    for (let a of collection) {
      if (a === no_repeat[i])
        num[i]++;
    }
    //result.push(no: num[i]);
  }
  return result;
}

module.exports = grouping_count;
