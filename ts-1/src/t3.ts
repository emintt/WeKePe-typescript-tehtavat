/* Defining Custom Types
Create a type alias for a book with properties like title, author, and 
publication year. Define an object using this type alias and print its details.

1. Define a type alias named Book with properties title, author, 
and publicationYear, each having appropriate primitive types.
2. Prompt the user to enter details for a book (title, author, publication year)
 and create an object of type Book with the entered values.
3. Display the details of the book object to the user. */

//export {}; // hack to ignore Book from task 4  
// TODO: Define a type alias named 'Book' with appropriate properties
type BookT3 = {
    title: string,
    author: string,
    publicationYear: number
}

// TODO: Implement the promptForBook function
function promptForBook(): BookT3 | string {
  // TODO: Prompt user for book details (title, author, publication year)
  const bookTitle = prompt('Enter book title');
  const bookAuthor = prompt(`Enter the book's author`);
  const bookPublicationYear = prompt('Enter publication year');

  if (bookTitle === undefined || bookTitle === null) {
    return 'Book title is undefined or null'
  }
  if (bookAuthor === undefined || bookAuthor === null) {
    return 'Book author is undefined or null'
  }

  if (bookPublicationYear === undefined || bookPublicationYear === null) {
    return 'Book publication year is undefined or null'
  } else if (isNaN(+bookPublicationYear)) {
    return 'Invalid number for book publication year'
  } 
  const bookPublicationYearNumber: number =  +bookPublicationYear;
  // TODO: Create an object of type 'Book' with the entered values
  const book: BookT3 = {
    title: bookTitle,
    author: bookAuthor,
    publicationYear: bookPublicationYearNumber,
  }
  return book;
}

// TODO: Call the promptForBook function to get the book details
const bookDetails = promptForBook();

// TODO: Display the details of the book object to the user
if (typeof bookDetails !== 'string') {
    console.log("Book Details:");
    console.log(`Title: ${bookDetails.title}`);
    console.log(`Author: ${bookDetails.author}`);
    console.log(`Publication Year: ${bookDetails.publicationYear}`);
} else {
    console.log(bookDetails);
}
