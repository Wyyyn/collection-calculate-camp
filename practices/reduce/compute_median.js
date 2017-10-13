'use strict';

function compute_median(collection) {
  //cuocuocuocuocuocucouocuocuoXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxx
  //sort排序
    var length = collection.length, isSwap;
    for (var i = 0; i < length; i++) {
      isSwap = false;
      for (var j = length - 1; j >= i+1; j--) {
        collection[j] < collection[j-1] && (isSwap = true) && swap(j,j-1,collection);
      }
      if(!isSwap)
        break;
    }
    if(collection.length%2 === 0){
      var median=(collection[(collection.length/2)]+collection[(collection.length/2-1)])/2;
    }
    else{
      var median=collection[collection.length/2];
    }
  return median;
}
function swap(i,j,array){
  var temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

module.exports = compute_median;


