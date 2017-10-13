'use strict';

function get_letter_interval(a, b) {
  //在这里写入代码
  var result=[];

  result = (a<b)?( Add(a,b)):((a>b) ? (Jian(a,b)) : Equaled(a,b));
  return result;
}
function Add(a,b) {
  var result = [];
  while(a<=b){

    result.push(String.fromCharCode(a+96));
    a++;
  }
  return result;
}
function Jian(a,b) {
  var result = [];
  while(a>=b){
    result.push(String.fromCharCode(a+96));
    a--;
  }
  return result;
}
function Equaled(a,b){
  var result=[];
  result.push(String.fromCharCode(a+96));
  return result;
}


module.exports = get_letter_interval;
