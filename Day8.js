//  Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const person = {
    name: 'javascript',
    age: '49'
}
console.log(`The person name is ${person.name} and age is ${person.age}`)


// Create a multi-line string using template literals and log it to the console.
const multiLineString = `
This is a multi-line string.
You can add numbers. like this:
1 + 2 = ${1 + 2}`;
console.log(multiLineString);


// Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const numbers = [10, 20, 30, 40, 50];
const [first, second] = numbers; // this is how you destruct the array. using []

console.log(`pehla element: ${first}`);
console.log(`second element: ${second}`);

// Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title: 'javascript book',
    author: 'Bill gates'
}

const { title: bookTitle, author } = book;

console.log(`the book title is ${bookTitle} and author is ${author}`)


//  Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const newArr = [...arr1, ...arr2]

console.log('new array:::', newArr)


// Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sumKaro(...number) {
    return number.reduce((total, num) => total + num, 0)
}

const showResult = sumKaro(1, 2, 3, 4, 5, 6, 7, 8, 9)
console.log('result:', showResult)


// Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function naamNahiHai(a, b = 1) {
    return `a: ${a}  and b: ${b}`
}

const Default = naamNahiHai(0)
console.log('Default Output::', Default)

const withoutDefault = naamNahiHai(2, 3)
console.log("without Default value: ", withoutDefault)

// Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const name = "Raftaaar Raaaaaaaaaaaa";
const age = 3;

const bot = {
    name,
    age,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    incrementAge() {
        this.age++;
        console.log(`I am now ${this.age} years old.`);
    }
};

bot.greet();
bot.incrementAge();


//  Create an object with computed property names based on variables and log the object to the console.
const propName1 = 'firstName';
const propName2 = 'lastName';
const propName3 = 'age';

const personn = {
    [propName1]: 'Motu',
    [propName2]: 'Patlu',
    [propName3]: 30,
    greet() {
        console.log(` my name is ${this[propName1]} ${this[propName2]} and i am ${this[propName3]} years old.`);
    }
};


personn.greet();
