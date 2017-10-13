'use strict';
function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result=[];
  for(var collection of collection_a) {
    let splitInput = collection.split("-");
    let key = splitInput[0];
    let count = parseFloat(splitInput[1] || 1);
    let item = result.find((item) => item.key === key);
    if (item)
      item.count+=count;

    else {
      result.push({key: key, count: count});

    }
  }
  for(let b of object_b.value){
    let item=result.find((item) => item.key === b);
    if(item){
      item.count=item.count-parseInt(item.count/3);
    }
  }
  return result;
}

module.exports = create_updated_collection;
