// let book = {
//     title: "ABC book",
//     author: "Surya",
//     summary: function() {
//         return `${this.title} by ${this.author}`;
//     }
// };

// console.log(book.summary());




// class Vehicle {
//     move() {
//         return "The vehicle is moving";
//     }
// }

// class Car extends Vehicle {
//     move() {
//         return "The car is driving";
//     }
// }

// const v = new Vehicle();
// const c = new Car();

// console.log(v.move()); 
// console.log(c.move()); 



// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// let person1 = new Person("Surya", 10);
// person1.greet(); 


// function Laptop(brand, model) {
//     this.brand = brand;
//     this.model = model;
//     this.specs = function() {
//         console.log(`Brand: ${this.brand}, Model: ${this.model}`);
//     }
// }

// let laptop1 = new Laptop("Dell Latitude", "XPS 8044");
// laptop1.specs();



class Pen{
    constructor(color, type) {
        this.color = color;
        this.type = type;
    }
    write() {
        console.log(`Writing with a ${this.color} ${this.type} pen`);
    }
}
let pen1 = new Pen("black", "gel");
pen1.write();