"use strict";
/* Primitive Types */
let firstname = 'Danny';
let firstname2 = 'Danny';
/* Union Types */
let age;
age = 26;
age = '26';
/* Dynamic types */
let age2 = 100;
age2 = true;
/* Literal types */
let direction;
direction = 'UP';
/* Objects */
let person;
person = {
    name: 'Danny',
    isProgrammer: true,
};
// person.age = 26; // Error - no age prop on person object
// person.isProgrammer = 'yes'; // Error - should be boolean
/* Arrays */
let ids = [];
ids.push(1);
// ids.push("2"); // Error
let options;
options = [10, 'UP'];
let person2 = ['Delia', 48];
// person2[0] = true; // Error - only strings or numbers allowed
/* Tuples */
// fixed size & known data types
let options2;
options2 = ['UP', 10];
/* Functions */
// Below, :string could be omitted because TS would infer the return type
function circle(diam) {
    return 'Circumf = ' + Math.PI * diam;
}
// ES6
const circle2 = (diam) => 'Circumf = ' + Math.PI * diam;
let sayHi;
sayHi = (name) => console.log('Hi ', name);
sayHi('Danny');
let id = 24;
let p1 = {
    name: 'Delia',
    isProgrammer: false,
};
p1.name = 'Del'; // Error - read only
let speech = {
    sayHi: function (name) {
        return 'Hi ' + name;
    },
    sayBye: function (name) {
        return 'Bye ' + name;
    }
};
/* The  DOM & Type Casting */
// non-null operator, !, to tell TS the expression isn't null or undefined
const link = document.querySelector("a");
const form = document.getElementById("signup-form");
// logLength accepts all types with a length property
const logLength = (a) => {
    console.log(a.length);
};
// TS captures the type inplicitly
logLength('Hello'); // 5
// Can also explicitly pass the type to T
logLength([1, 2, 3]); // 3
// We have to pass in a type argument
let labrador = {
    breed: 'labrador',
    treats: 'chew sticks, tripe',
};
let scottieDog = {
    breed: 'scottish terrier',
    treats: ['turkey', 'haggis'],
};
/* Enums */
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["FILE"] = 1] = "FILE";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
})(ResourceType || (ResourceType = {}));
ResourceType.BOOK; // 0
ResourceType.FILE; // 1
/* Narrowing */
let getUserAge = () => '18';
let age3 = getUserAge();
age3; // string | number
if (typeof age3 === 'string') {
    age3; // string
}
