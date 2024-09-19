import './style.css'
interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string;
}

class Library {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public getBookDetails(isbn: string): Book | undefined {
    return this.books.find(book => book.isbn === isbn);
  }
}

class DigitalLibrary extends Library {
  public readonly website: string;

  constructor(website: string) {
    super();
    this.website = website;
  }

  public listBooks(): string[] {
    return this.books.map(book => book.title);
  }
}

const myDigitalLibrary = new DigitalLibrary("https://mylibrary.com");

myDigitalLibrary.addBook({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  isbn: "9780743273565",
  publishedYear: 1925,
  genre: "Fiction"
});

myDigitalLibrary.addBook({
  title: "1984",
  author: "George Orwell",
  isbn: "9780451524935",
  publishedYear: 1949
});

const bookDetails = myDigitalLibrary.getBookDetails("9780743273565");
if (bookDetails) {
  console.log(`Book Details:`, bookDetails);
} else {
  console.log("Book not found.");
}

const allTitles = myDigitalLibrary.listBooks();
console.log(`List of Book Titles:`, allTitles);