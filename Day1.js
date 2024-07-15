//* Variable and DataTypes

var math = 10;
// console.log(math)

let name = "Chai"
// console.log(name)

const answer = false
// console.log(answer)

const arr = [1, 2, 3, 4, 5, 6]
const obj = {
    firstName: 'faisal',
    lastName: 'Khan'
}


// console.log(typeof math)
// console.log(typeof name)
// console.log(typeof answer)
// console.log(typeof arr)
// console.log(typeof obj)


let lumber1 = 12
console.log(lumber1)
lumber1 = 13
console.log("after resign::", lumber1)


const lumber2 = 99
// console.log(lumber2)
// lumber2 = 100;
// console.log(lumber2) //! gives an error because can't reassign value to the const. 



let numbers = 12;
let names = "Faisal Khan"
let functionName = function () {
    console.log("hello from Function")
}
let nullvalue = null;
let trueValue = true;
let arr1 = [1, 2, 3, 4, 5, 6, 7]
let obj1 = {
    name: 'FaisalKhan',
    contact: '0315578abc',
}
let symbolVariable = Symbol("symbol");
let bigINTabc = BigInt(3165151);

console.log("number:", typeof numbers)
console.log("number:", typeof names)
console.log("number:", typeof functionName)
console.log("number:", typeof arr1)
console.log("number:", typeof obj1)
console.log("number:", typeof symbolVariable)
console.log("number:", typeof bigINTabc)




//!!! Different behaviour between const and let 
// Using let
let variableLet = 10;
console.log("Initial value of variableLet:", variableLet); // Outputs: 10

// Reassigning the let variable
variableLet = 20;
console.log("Reassigned value of variableLet:", variableLet); // Outputs: 20

// Using const
const variableConst = 30;
console.log("Initial value of variableConst:", variableConst); // Outputs: 30

// Attempting to reassign the const variable
try {
    variableConst = 40; // This will cause an error
} catch (error) {
    console.error("Error when reassigning variableConst:", error.message); // Outputs: Assignment to constant variable.
}
