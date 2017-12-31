'use strict';

function cat(name,color) {
    this.name = name;
    this.color = color;
}

var fluffy = new cat("fluffy","white");
cat.prototype.age = 17;
console.log(fluffy.__proto__); //{ age: 17 }
console.log(cat.prototype); //{ age: 17 }

var bucky = new cat("bucky","black");
console.log(bucky.__proto__);//{ age: 17 }

fluffy.age = "20";
console.log(fluffy.age); // 20 >>> from fluffy instance
console.log(fluffy.__proto__.age); //  17 >> from prototype
