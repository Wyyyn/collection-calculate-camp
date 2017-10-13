function collect_same_elements(a, b) {
  //在这里写入代码
  var result = a.filter(function(v){ return b[0].indexOf(v) > -1 });
  return result;
}

module.exports = collect_same_elements;
