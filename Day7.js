// Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {
    title: 'Justuju Ka Safar 1',
    author: 'Dr Zeeshan Usmani',
    year: 2021
}

console.log("book:", book)


// Access and log the title and author properties of the book object.
console.log(book.title, book.author)

//  Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
function bookInfo() {
    console.log(`The book name is ${book.title}, Author name is ${book.author}`)
}
bookInfo();

//  Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
function bookYear(year) {
    console.log("book old year:", book.year)
    book.year = year;
    console.log("book updated year:", book.year)
}
bookYear(2024)


// Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
    name: 'Central Library',
    books: [
        {
            title: 'Justuju Ka Safar 1',
            author: 'Dr Zeeshan Usmani',
            year: 2021
        },
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            year: 1960
        },
        {
            title: '1984',
            author: 'George Orwell',
            year: 1949
        }
    ]
};

console.log(library);


// Access and log the name of the library and the titles of all the books in the library.
console.log("Library Name:", library.name)

library.books.forEach(bookName => {
    console.log(`BookTitle:`, bookName.title)
});

// Add a method to the book object that uses the THIS keyword to return a string with the book's title and year, and log the result of calling this method.
const zeeshanBook = {
    title: 'Justuju Ka Safar 1',
    author: 'Dr Zeeshan Usmani',
    year: 2021,
    getDetails() {
        return `${this.title} (${this.year})`;
    }
};
// console.log(book.getDetails());

// for..in loop to iterate over the properties of the book object and log each property and its value.
for (let key in library) {
    if (Array.isArray(library[key])) {
        console.log(`Property: ${key}`);
        library[key].forEach(book => {
            console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`);
        });
    } else {
        console.log(`${key}: ${library[key]}`);
    }
}


// Object.keys & Object.values methods to log all the keys and values of the book object.
const keys = Object.keys(book);
console.log('Keys:', keys);

const values = Object.values(book);
console.log('Values:', values);