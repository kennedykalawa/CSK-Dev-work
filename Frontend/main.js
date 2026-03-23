//alert('Hello ktec');
console.log("Hello Ktec Family");
//for variables-- var ,let, const but nowadays var is not much used or recommended 
//for let the variable can be reassigned but for const cannot be reassigned
//
let score

score = 10;

console.log(score);

//String, Numbers, Boolean, Null, undefined

const name = "James";
const age = 20;
const rating = 5.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof age);
console.log(typeof y);
console.log(typeof x);
    //STRING method and staff😁

const s = "Hello Ktec!";

console.log(s.substring(0, 5).toUpperCase());
console.log(s.split());


//single line comment
/*multi
 * line
 * comment */

//ARRAYs
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ['bananas', ' apples', 'oranges', 'avocados']
console.log(fruits);
console.log(fruits[3]);
fruits[4] = 'grapes';
fruits.push('mangos');
fruits.unshift('strawbwerries');
console.log(fruits)
console.log(Array.isArray(fruits));


//OBJECT LITERALS

const person = {
    firstname: 'john',
    lastname: 'doe',
    age: 30,
    hobbies: ['music', 'coding', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person)
console.log(person.hobbies);

