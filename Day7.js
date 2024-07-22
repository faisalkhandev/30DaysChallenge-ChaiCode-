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
