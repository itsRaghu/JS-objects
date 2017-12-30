/*
enumerable : using enemerable true, we can loop over object properties
making enumerable false prevents the looping over the object
lso making enumerable false makes the property does not show up in the object keys
also Json serialize stringify doesnt show up if it false
Object.keys[cat];
but still can be seen using bracket notation
*/

var cat = {
    name: "Fluffy",
    color:"white"
}

// for...in loop

for(propertyName in cat) {
    console.log(propertyName + ": "+cat[propertyName] );// name: fluffy color:white  // we can loop as enumerable is true
}

console.log( Object.getOwnPropertyDescriptor(cat, "name"));

Object.defineProperty(cat, 'name', {enumerable:false});
console.log(Object.getOwnPropertyDescriptor(cat, "name"));

for(propertyName in cat) {
    console.log(propertyName + ": "+cat[propertyName]);// color: white // we cannot loop on name property as enumerable is false for this property
}
cat.age = 17;
console.log(Object.keys(cat)); // ['color','age']

Object.defineProperty(cat, 'name', {enumerable:true});
var stringify = JSON.stringify(cat);
console.log(stringify); //{"name":"Fluffy","color":"white","age":17}
Object.defineProperty(cat, 'name', {enumerable:false});
console.log(JSON.stringify(cat)); //{"color":"white","age":17}

console.log(cat['name']); // fluffy 