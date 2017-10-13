'use strict';

function median_to_letter(collection) {
  if(collection.length%2 === 0){
    var median=(collection[(collection.length/2)]+collection[(collection.length/2-1)])/2;
    median=Math.ceil(median);
  }
  else{
    var median=collection[collection.length/2];}
  if(median<=26)
    return String.fromCharCode(median+96);
  else{
    var a1=String.fromCharCode((median-26)+96);
    var letter="a"+a1;
    return letter;
  }
}

module.exports = median_to_letter;
