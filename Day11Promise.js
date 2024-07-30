//! uncomment api vairable then fetch tasks will work. 

// const api = 'https://jsonplaceholder.typicode.com/posts'
const api = 'paste the https here'

// Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Resolved after 2 seconds');
    }, 2000);
});

promise.then((message) => {
    console.log(message);
});

// Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch()
const rejectPromise = new Promise((_, reject) => {
    setTimeout(() => {
        reject('Rejected after 2 seconds');
    }, 2000);
});

rejectPromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});

// Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
function fetchData(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve(message);
        }, delay);
    });
}

fetchData('Fetching user data...', 1000)
    .then(() => fetchData('Fetching orders data...', 1000))
    .then(() => fetchData('Fetching products data...', 1000))
    .then(() => fetchData('All data fetched!', 1000))
    .catch((error) => {
        console.error('An error occurred:', error);
    });

// Write an async function that waits for a promise to resolve and then logs the resolved value.
async function myPromise() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Solved!');
        }, 2000);
    });

    try {
        const result = await promise;
        console.log('try and catch:', result);
    } catch (error) {
        console.error(error);
    }
}

myPromise();

// Use Fetch API to get data from a public API and log the response data to the console using promises.
fetch(api)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });


// Use Fetch API to get data from a public API and log the response data to the console using async/await.

async function responseAwait() {

    try {
        const data = await fetch(api)
        const dataJson = await data.json();
        console.log('Dataaa::', dataJson)

    } catch (error) {
        console.log(error)
    }


}
responseAwait();



// use Promise.all to wait for multiple promises to resolve and then log all their values.
const Promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Solve 1")
    }, 2000);

})
const Promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Solve 2")
    }, 2000);

})
const Promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Solve 3")
    }, 2000);

})
const Promise4 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Solve 4")
    }, 2000);

})


Promise.all([Promise1, Promise2, Promise3, Promise4])
    .then((value) => {
        console.log(value)
    })

    .catch((error) => {
        console.error('One of the promises rejected:', error);
    });


// user promise.race to log the value of the first promise that resolves among multiple promises.
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 3000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 1000);
});

const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 3 resolved');
    }, 2000);
});


Promise.race([promise1, promise2, promise3])
    .then((value) => {
        console.log('First resolved promise:', value); // Logs: 'Promise 2 resolved' because the timeout is 1s
    })
    .catch((error) => {
        console.error('One of the promises rejected:', error);
    });
