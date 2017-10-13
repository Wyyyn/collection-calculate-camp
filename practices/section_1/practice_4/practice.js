function collect_same_elements(a,b) {
  //在这里写入代码
  var collection_a = a.filter(function(v){ return b.value.indexOf(v.key) > -1 });
  var result=collection_a.map(x=>{ return (x.key);});
  return result;
}

module.exports = collect_same_elements;
