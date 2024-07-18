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