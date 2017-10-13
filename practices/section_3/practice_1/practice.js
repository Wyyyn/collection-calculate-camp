'use strict';
function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  for(let b of object_b.value){
    let item=collection_a.find((item) => item.key === b);
    if(item){
      item.count--;
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
