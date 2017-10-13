'use strict';
function count_same_elements(collections) {
  //在这里写入代码
  var result=[];
  // let no_repeat=Array.from(new Set(collection));
  for(var collection of collections) {
    let splitInput = collection.split("-");
    let key = splitInput[0];
    let count = parseFloat(splitInput[1] || 1);

    let item = result.find((item) => item.key === key);
    if (item)
      item.count++;

    else {
      result.push({key: key, count: count});

    }
  }
  return result;
}

module.exports = count_same_elements;
