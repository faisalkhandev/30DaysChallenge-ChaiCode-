//  Create an array of numbers from 1 to 5 and log the array to the console.

const arrNumber = [1, 2, 3, 4, 5, 6]
console.log(arrNumber)

// Access the first and last elements of the array and log them to the console.

const arrIndex = ['Faisal', 'Khan', 1]
console.log("first Index:", arrIndex[0], "2nd Index:", arrIndex[1])

// use the push method to add a new number to the end of the array and log the updated array.

const arrPush = [1, 2, 3]
const updatedArr = arrPush.push(4)
console.log(`${updatedArr} is pushed to the array and the new updated array is ${arrPush}`)


// use hte pop method to remove the last element from the array and log the updated array.

const arrPop = [1, 2, 3]
const updatedPopArr = arrPop.pop();
console.log("used Pop(): ", arrPop)


// use the shift method to remove the first element from the array and log the updated array.

const arrShift = [1, 2, 3, 4]
const arrShiftUpdated = arrShift.shift();
console.log("Shift the array: ", arrShift)

//use the unshift method to add a new number to the beginning of the array and log the updated array.

const arrUnshift = [1, 2, 3, 4,]
const updatUnshiftArr = arrUnshift.unshift(0);
console.log("unshift(0) is used: ", arrUnshift)

// use map method to create a new array where each number is doubled and log the new array.

const names = ['faisal khan', 'asaf azad kashmir', 'mudassir', 'lubna', 'ali']
names.map((name) => (
    console.log(name)
))

// use filter method to create a new array with only even numbers and log the new array.

const lumbers = [1, 2, 34, 5, 6, 7, 8, 11, 22, 33, 4, 55, 64, 234, 231,]
let evenlumber = lumbers.filter((num) => num % 2 === 0)
console.log('even: ', evenlumber)

// use reduce method to calculate the sum of all numbers in the array and log the result.

const sumLumber = [1, 2, 3, 4, 5]
const sumRes = sumLumber.reduce((acc, cur) => acc + cur, 0)
console.log('used reduce: ', sumRes)

// use for loop to iterate over the array and log each element to the console.

const arrForLoop = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
for (let i = 0; i < arrForLoop.length; i++) {
    console.log('using for loop', arrForLoop[i])
}

// use foreach method to iterate over the array and log each element to the console.

const arrForEach = [1, 2, 3, 4, 5, 6, 7, 8]
arrForEach.forEach((num) => (
    console.log('forEach', num)
))

// Create a two-dimensional array (matrix) and log the entire array to the console.

const twoDiArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(twoDiArr);


// Access and log a specific element from the two-dimensional array.

console.log(twoDiArr[1][1])


