const lumber = -1;

const result = lumber > 0 ? "Positive" : lumber === 0 ? "Zero" : "Negative"
console.log(result)


const num1 = 10;
const num2 = 5;
const num3 = 3;
let largest;

if (num1 > num2 && num1 > num3) {
    largest = num1
    console.log("num1", largest)
}
else if (num2 > num1 && num2 > num3) {
    largest = num2;
    console.log("num2", largest)
}
else {
    largest = num3
    console.log("num3", largest)
}


const weekDay = 5;

switch (weekDay) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday")
        break;
    case 3:
        console.log("wednesday")
        break;
    case 4:
        console.log("thursday")
    default:
        console.log('not founded')
}


