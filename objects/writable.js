"use strict";

/*
writable : It defines whether the property value can be changed from its initial value.
            making writable false will not alter the property value and throws error in strice mode.          
*/


var cat = {
    name : "Bittu",
    color : "Green"
}

console.log(Object.getOwnPropertyDescriptor(cat, 'name')); // { value: 'Bittu',writable: true,enumerable: true,configurable: true }
var propertyNames = Object.getOwnPropertyNames(cat);
console.log(propertyNames); // ['name', 'color'];

Object.defineProperty(cat, 'name', {writable:false});
console.log(cat.name = "changeing"); // error : Cannot assign to read only property 'name' of #<Object>

/*
If non writable property contains an object then we still can change its properties.
ex : 
*/
var cat = {
    name:{first:"bucky",last:"blast"}
}
Object.defineProperty(cat, 'name', {writable:false});
cat.name.first = "Raghu"
console.log(cat.name.first); // Raghu

// Using Object.freeze, we can avoid this
 Object.freeze(cat.name);
 cat.name.first = "kulkarni";//TypeError: Cannot assign to read only property 'first' of #<Object>
 cobsole.log(cat.name.first);
