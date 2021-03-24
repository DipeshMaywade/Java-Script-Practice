let origDogs = ["BullDog", "Beagle", "Labrador"];
let cats = new Array("Americal Culr", "Bengal");
let birds = new Array ("Falcons", "Ducks", "Falmingoes");

//ArrayCopy
let slicedDongs = origDogs.slice(1,2);
console.log(slicedDongs);
let dogs = origDogs.slice(0);
console.log(dogs);
let copyDogs = origDogs;
console.log(copyDogs);

//Stack
let pushDog = dogs.push("Golden Retriver");
console.log(pushDog);
console.log(dogs);
let popDog = dogs.pop();
console.log(popDog);
dogs[0] = "Poodle";
console.log(dogs);

//Add Remove From First 
let addFirst = dogs.unshift("Golden Retriver");
console.log(dogs);
let shiftDog = dogs.shift();
console.log(dogs); 

//Array Add Remove Specific Position
dogs.splice(2,1,"Pug","Boxer")
console.log(dogs);

//Array Function -Concat, Slice and Sort
let animals = dogs.concat(cats,birds);
console.log(animals);
let sortDogs = dogs.sort();
console.log(sortDogs);

function scanArray([first, second]) {console.log("Scan: "+first+" "+ second);}
scanArray(animals);
let joinAnimal = animals.join(" ");
console.log(typeof(joinAnimal));
console.log(joinAnimal);

let allAnimal = "";
for(let animal of animals){
    allAnimal = allAnimal+animal + " ";
} 
console.log("Animals: "+ allAnimal);