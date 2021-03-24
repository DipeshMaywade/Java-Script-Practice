let array = new Array();
for(let i=0; i<10; i++){
   values =100+Math.floor(Math.random()*1000)%899;
   array.unshift(values);
} 
console.log(array);
let sortArray = array.sort();
console.log(sortArray);
console.log("Second Largest: "+ sortArray[sortArray.length-2]);
console.log("Second Smallest: "+ sortArray[1]);
