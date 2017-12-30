/* 
configurable : with configurable:false, we cannot redefine object properties
cannot  delete the property defined
*/

var cat = {
    name:"fluffy",
    age:27
}

Object.defineProperty(cat, "name", {configurable:false});
//Object.defineProperty(cat, "name", {configurable:true}); // gives error
//Object.defineProperty(cat, "name", {enumerable:false}); //TypeError: Cannot redefine property: name

delete cat.name; //cannot delete when  configurable is false
console.log(cat); // { name: 'fluffy', age: 27 }