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
}
}
}
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"