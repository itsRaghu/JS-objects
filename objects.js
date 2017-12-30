// 1) Object literal
// 2) constructor
// 3) Object.create();
// 4) es6 class

// 1) Object literal

var cat = {
    name:"Bucky",
    color:"white",
    talk:function(){
        console.log("I am talking");
        console.log(this.name);
    }
}
// cat is a object with two properties, name and color with propetiy value bucky and white resply.

cat.age = 3;
//adding function to objects is like adding one more property to object
cat.speak = function() {
    console.log("Meaoww");
}
// console.log(cat.color); //white
// console.log(cat.age); //3
// cat.speak(); // Meaoww
// cat.talk(); //I am talking // Bucky

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 


//2)  Contructor function to create object instances

function Cat() {
    this.name = "FLuffy";
    this.color = "White"
}

var cat = new Cat(); // new Cat instance 
//console.log(cat.name); // FLuffy


function Dog (name, color) {
    this.name = name;
    this.color = color;
}

var dog = new Dog("bucky", "BLack"); // new Dog instance with name bucky
// console.log(Dog.name); // Returns name of the function // Dog
//console.log(dog.name); // bucky

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

// 3) Object.create();

var doll = Object.create(Object.prototype,
    {
        name: {
            value:'dolly',
            enumerable:true,
            writable:true,
            configurable:true
        },
        color: {
            value:"Red",
            enumerable:true,
            writable:true,
            configurable:true
        }
    }
)

console.log(doll); // { name: 'dolly', color: 'Red' }


// 4) Using ES6 class
class ClassCat {
    constructor (name, color) {
        this.name= name
        this.color=color
    }
    speak() {
        console.log("Brkkkk");
    }
}

var classCat = new ClassCat("ClassCat", "blue");
classCat.speak();
console.log(classCat.name);

