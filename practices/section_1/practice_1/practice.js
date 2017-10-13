function collect_same_elements(a,b) {
  //在这里写入代码
  //let result = collection_a.filter(v => collection_b.includes(v));
  var result = a.filter(function(v){ return b.indexOf(v) > -1 });
  return result;
}

module.exports = collect_same_elements;
