/* Primitive Types */

let firstname: string = 'Danny'

let firstname2 = 'Danny'

/* Union Types */

let age: number | string;
age = 26;
age = '26';

/* Dynamic types */

let age2: any = 100;
age2 = true;

/* Literal types */

let direction: 'UP' | 'DOWN';
direction = 'UP';

/* Objects */

let person: {
	name: string,
	isProgrammer: boolean;
};

person = {
	name: 'Danny',
	isProgrammer: true,
};

// person.age = 26; // Error - no age prop on person object
// person.isProgrammer = 'yes'; // Error - should be boolean

/* Arrays */

let ids: number[] = [];
ids.push(1);
// ids.push("2"); // Error

let options: (string | number)[];
options = [10, 'UP'];

let person2 = ['Delia', 48];
// person2[0] = true; // Error - only strings or numbers allowed

/* Tuples */
// fixed size & known data types

let options2: [string, number];
options2 = ['UP', 10];

/* Functions */
// Below, :string could be omitted because TS would infer the return type

function circle(diam: number): string {
	return 'Circumf = ' + Math.PI * diam;
}

// ES6
const circle2 = (diam: number): string => 'Circumf = ' + Math.PI * diam;

let sayHi: (name: string) => void;

sayHi = (name: string) => console.log('Hi ', name);

sayHi('Danny');

/* Type Aiases */
// similar to interfaces

type StringOrNum = string | number;
let id: StringOrNum = 24;

/* Interfaces */
// to describe objects
// can be reopened and extended, unline Type Aliasis

interface Person {
	name: string,
	isProgrammer: boolean,
}

let p1: Person = {
	name: 'Delia',
	isProgrammer: false,
};

p1.name = 'Del'; // Error - read only

// describe a function in an interface
interface Speech {
	sayHi(name: string): string;
	sayBye: (name: string) => string;
}

let speech: Speech = {
	sayHi: function(name: string) {
		return 'Hi ' + name;
	},
	sayBye: function(name: string) {
		return 'Bye ' + name;
	}
}

// Extend an interface
interface Animal {
	name: string;
}

interface Dog extends Animal {
	breed: string;
}

/* The  DOM & Type Casting */

// non-null operator, !, to tell TS the expression isn't null or undefined
const link = document.querySelector("a")!;

const form = document.getElementById("signup-form") as HTMLFormElement;

/* Generics */
// where the arguments & return types are unknown ahead of time

interface HasLength {
	length: number;
}

// logLength accepts all types with a length property
const logLength = <T extends HasLength>(a: T) => {
	console.log(a.length);
};

// TS captures the type inplicitly
logLength('Hello'); // 5

// Can also explicitly pass the type to T
logLength<number[]>([1,2,3]); // 3

// Declare a type T, which can change in your interface
interface Dog2<T> {
	breed: string;
	treats: T;
}

// We have to pass in a type argument
let labrador: Dog2<string> = {
	breed: 'labrador',
	treats: 'chew sticks, tripe',
};

let scottieDog: Dog2<string[]> = {
	breed: 'scottish terrier',
	treats: ['turkey', 'haggis'],
};

/* Enums */

enum ResourceType {
	BOOK,
	FILE,
	FILM,
}
ResourceType.BOOK; // 0
ResourceType.FILE; // 1

/* Narrowing */

let getUserAge = ():(string | number) => '18';

let age3 = getUserAge();
age3 // string | number

if(typeof age3 === 'string') {
	age3; // string
}
