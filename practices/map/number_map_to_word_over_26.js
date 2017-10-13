'use strict';
var number_map_to_word_over_26 = function(collection){
  var result =collection.map(function (a) {
    if(a<=26)
    return String.fromCharCode(a+96);
    else{
      var a1=String.fromCharCode((a-26)+96);
      var a2="a"+a1;
      return a2;
    }

  });
  return result;
};

module.exports = number_map_to_word_over_26;
