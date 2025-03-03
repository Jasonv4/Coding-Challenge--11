//Task 1 Creating a Book class
class Book { constructor(title, author, isbn, copies) {
     this.title = title;
     this.author = author;
     this.isbn = isbn;
     this.copies = copies
 } // Adding all of the properties of the Book class;
 getDetails() {return `Title: ${this.title}, Author: ${this.author}, Isbn: ${this.isbn}, Copies: ${this.copies}`}

updateCopies(quantity) {if(this.copies + quantity >= 0 ) 
{if (this.copies + quantity >= 0) {
    this.copies += quantity; 
} else {console.log(`Copies can't be negative`);}
} // Updates copies of books and stops it from being 0 
}
}
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"


//Task 2 Creating a Borrower class
class Borrower { constructor(name, borrowerId ) {
    this.name = name;
    this.borrowerId = borrowerId;
    this.borrowedBooks = [];
} // Creating borrower class
borrowBook(book) {
    if(!this.borrowedBooks.includes(book)) 
    {this.borrowedBooks.push(book)}
else {console.log`This book has already been borrowed`}
} // Method that borrows a book 
returnBook(book) { if (this.borrowedBooks.includes(book))
{this.borrowedBooks = this.borrowedBooks.filter(thisBook => thisBook.isbn !== book.isbn);}
else {console.log(`Booked not borrowed`)}
} // Method that returns books
}
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: []

// Task 3 Creating a Library class
class Library { constructor(){
    this.books = []; // Array of books
    this.borrowers = []; } // Array of borrowers
    addBook(book) {
        let currentBook = this.books.find(bookAtLibrary => bookAtLibrary.isbn === book.isbn);
        if(!currentBook) {this.books.push(book);}
        else {console.log (`This ISBN is already in use`)}
    } // Adds books to library
listBooks() {this.books.forEach(book => console.log(book.getDetails()))}
//Task 4 Implement Book Borrowing
lendBook (borrowerId, isbn) {

const book = this.books.find(book => book.isbn === isbn);
const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId);
if (book && borrower)
 {if (book.copies > 0 )
 {book.updateCopies(-1); 
    // Updates the number of copies
    borrower.borrowBook(book);
 } else {console.log("Copies for this book unavailable")}
 } else {console.log ("Could not find borrower or book")}
}
//Task 5 Implementing Book Returns
returnBook (borrowerId, isbn) 
{const borrower = this.borrowers.find(bookss => bookss.borrowerId === borrowerId);
    const book = this.books.find (bookss =>bookss.isbn === isbn);
    if (book) {book.updateCopies(1); // Updates the number of copies
        if (borrower) { borrower.returnBook(book);} //  returns book
    }
} 

}
const library = new Library();
library.addBook(book1);
library.listBooks();
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
library.lendBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]
library.returnBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
console.log(borrower1.borrowedBooks);
// Expected output: []


