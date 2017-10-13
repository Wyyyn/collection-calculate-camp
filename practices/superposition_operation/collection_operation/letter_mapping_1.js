'use strict';

function even_to_letter(collection) {

  var result=collection.filter(a => {return a % 2 === 0;});
  result=result.map(a => {return String.fromCharCode(a + 96);});
  return result;
}

module.exports = even_to_letter;
