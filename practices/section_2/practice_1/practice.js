'use strict';
function count_same_elements(collections) {
  //在这里写入代码
  var result=[];
 // let no_repeat=Array.from(new Set(collection));
  for(var collection of collections) {

    let item = result.find((item) => item.key === collection);
    if (item)
      item.count++;

    else {
      result.push({key: collection, count: 1});

    }
  }
  return result;
}

module.exports = count_same_elements;
