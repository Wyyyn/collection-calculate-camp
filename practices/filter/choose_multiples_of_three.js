'use strict';

function choose_multiples_of_three(collection) {

  var even = collection.filter(x => {
      return x % 3 === 0;
});
  return even;
}

module.exports = choose_multiples_of_three;
