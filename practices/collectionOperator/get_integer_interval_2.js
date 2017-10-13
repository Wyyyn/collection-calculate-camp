'use strict';

function get_integer_interval_2(a, b) {
  //在这里写入代码
  var result=[];

  result = (a<b)?( Add(a,b)):((a>b) ? (Jian(a,b)) : Equaled(a,b));
  return result;
}
function Add(a,b) {
  var result = [];
  while(a<=b){
    if(a%2 === 0)
    result.push(a);
    a++;
  }
  return result;
}
function Jian(a,b) {
  var result = [];
  while(a>=b){
  if(a%2 === 0)
    result.push(a);
  a--;
  }
  return result;
}
function Equaled(a,b) {
  var result=[];
  if(a%2 === 0)
    result.push(a);
  return result;
}
module.exports = get_integer_interval_2;
