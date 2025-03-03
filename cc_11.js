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
class Borrower { constructor(name, borrowerID ) {
    this.name = name;
    this.borrowerID = borrowerID;
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