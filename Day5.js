//! Write a function to check if a number is even or odd and log the result to the console.

function EvenOdd(num) {

    if (num % 2 === 0) {
        console.log(`The ${num} is even`)
    }
    else {
        console.log(`The ${num} is odd`)
    }

}

EvenOdd(10)


//! Write a function to calculate the square of a number and return the result.

function squareNumber(num) {
    let res = num * num
    console.log(`The square of ${num} is ${res}`)
}

squareNumber(5)

// Write a function expression to find the maximum of two numbers and log the result to the console.

function maxTwoNumbers(a, b) {
    let res = a > b ? a : b
    console.log(`The maximum of ${a} and ${b} is ${res}`)
}

maxTwoNumbers(10, 11)


// Write a function expression to concatenate two strings and return the result.

function concatenateTwoString(str1, str2) {
    console.log(`${str1} ${str2}`)
}

concatenateTwoString("Faisal", "Khan")


// Write an arrow function to calculate the sum of two numbers and return the result.

const calTwoNumbers = (a, b) => {
    console.log(`The sum of ${a} ${b} is ${a + b}`)
}

calTwoNumbers(10, 10)

// Write an arrow function to check if a string contains a specific character and return a boolean value.

function containCharacter(char, str) {
    return str.includes(char)
}

const string1 = "i am doing JS challenge"
const charact = "a"
const result = containCharacter(charact, string1)

console.log(`Does ${string1} has this ${charact}? ${result}`)



// Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function myFunction(a, b = 1) {

    console.log(a * b)
}

myFunction(10, 10)
myFunction(10)



// Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function person(name, age = 19) {
    console.log(`Hello ${name} age is ${age}`)
}

person("Ali", 20)

// Write a higher-order function that takes a function and a number, and calls the function that many times.

function hof(func, time) {
    for (let i = 1; i <= time; i++) {
        func();
    }
}


function sayHello() {
    console.log("Hello buddy")
}

hof(sayHello, 5)




// Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.



// function hoff(fun1, fun2 val) {

//     const res = fun1(val);
//     fun2(res)

// }


// function firstFun(val) {
//     console.log(val * val)
// }

// function secondFun(val) {
//     console.log(
//         `1st function result is ${res}, add 1 to it. ${res + 1}`
//     )
// }

// hoff(firstFun, secondFun, 6)


const applyFunctions = (func1, func2, value) => {
    const firstResult = func1(value);
    const finalResult = func2(firstResult);
    return finalResult;
};

const addTwo = (num) => {
    return num + 2;
};

const multiplyByThree = (num) => {
    return num * 3;
};

const initialValue = 5;
const res = applyFunctions(addTwo, multiplyByThree, initialValue);

console.log(`The final res is ${res}`); 
