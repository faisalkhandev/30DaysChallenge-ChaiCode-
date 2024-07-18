for (let i = 0; i <= 10; i++) {
    // console.log(i)
}


for (let j = 1; j <= 10; j++) {
    // console.log(5 * j)
}


let lumber = 1;
let test = 0;
while (lumber > 0 && lumber <= 10) {
    test = test + lumber
    // console.log(test)
    lumber++
}

let number1 = 10;

while (number1 >= 1) {
    // console.log(number1)
    number1--;
}


let number = 1;

do {
    // console.log(number);
    number++;
} while (number <= 5);



// pattern using nested loop 

for (let i = 1; i <= 5; i++) {
    let line = ""
    for (let j = 1; j <= i; j++) {
        line = line + "*"
    }
    console.log(line)
}


//? using //continue keyword. 

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue
    }
    console.log(i)
}

//? using //break keywork

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i)
}