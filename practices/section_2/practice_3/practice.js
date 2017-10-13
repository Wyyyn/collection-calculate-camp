'use strict';
function count_same_elements(collections) {
  var result=[];

  for(var collection of collections) {
    var re_collection=collection.replace(':','-').replace('[','-').replace(']',' ');
    let splitInput = re_collection.split("-");
    let name = splitInput[0];
    let summary = parseFloat(splitInput[1] || 1);

    let item = result.find((item) => item.name === name);
    if (item)
      item.summary+=summary;

    else {
      result.push({name: name, summary: summary});

    }
  }
  return result;
}

module.exports = count_same_elements;
