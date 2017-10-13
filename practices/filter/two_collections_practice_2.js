'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  let difference = collection_a.concat(collection_b).filter(v => !collection_a.includes(v) || !collection_b.includes(v))
}

module.exports = choose_no_common_elements;
