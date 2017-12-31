/* 
What is prototype?

Prototype is an object that exist on every function in javascript
Note:   function have prototype property
        Object have _proto_ property
A function prototype: A function prototype is the object instance that will become the prototype for all 
                        objects created using this function as a constructor

A object prototype: A object's protoype is the object instance from which the object inherited
*/

var arr = ['red','blue','green'];
/* 
equal to 
var arr = new Array('red','blue','green');
*/

console.log(arr[arr.length-1]); //green
console.log(arr.last); // undefineds

/*
array dont have last property in its prototype
but since javascript is dynamic we can add our own properties
*/
// let us add last property to return last element in array

Object.defineProperty(arr, 'last', {get:function(){
    return this[this.length-1];
}});
 console.log(arr.last); //green

 /* but since above last property works only for arr object and not to other object */
var arr2 = ['one','two','three'];
 console.log(arr2.last); //undefined  //as this array does not have last property.
 /* 
    insteadof  adding to single array, we can add last property to  
    array.prototype so that all array can have last property
    like this,
 */

 Object.defineProperty(Array.prototype, 'last', {get:function(){
    return this[this.length-1]
 }})

 console.log(arr2.last); //three

