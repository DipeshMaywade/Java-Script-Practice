// const sayHello = function(name){
//     return "Hey "+name+"."
// }
// console.log(sayHello("Deep"));

// const sayHello = (name) => `hey ${name} !`
// console.log(sayHello("Deep"));

const myTodos = [{
    title: 'make a tea',
    isDone: true
},{
    title: 'go to run',
    isDone: false
},{
    title: 'attend the class',
    isDone: true
}]
 
console.log(typeof(myTodos));
const thingsDone = myTodos.filter((todo) => todo.isDone == true)
console.log(thingsDone);