let keyStrng = 'a string';
let keyObj = {}
let keyFun = function(){}

//setting new values
let myMap = new Map();
myMap.set(keyStrng,"keyString");
myMap.set(keyObj,"Key Object");
myMap.set(keyFun,"Key Function");
console.log(myMap);

//getting values
let size = myMap.size
let value = myMap.get(keyStrng)
let isExist = myMap.has(keyStrng)
console.log(size,value,isExist);