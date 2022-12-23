/* 
- Single Responsibility
	
	A class should only have one responsibility. Furthermore, it should only have one reason to change.
How does this principle help us to build better software? Let's see a few of its benefits:

1- Testing – A class with one responsibility will have far fewer test cases.
2- Lower coupling – Less functionality in a single class will have fewer dependencies.
3- Organization – Smaller, well-organized classes are easier to search than monolithic ones.
*/

// First, we model a book and save the book as a file. We ran into two purposes here
class Book {
  public title: string;
  public author: string;
  public description: string;
  public pages: number;

  // constructor and other methods

  public saveToFile(): void {
    // some fs.write method to save book to file
  }
}

// Instead of having only one class, we have two classes, one for each purpose.
class Book {
  public title: string;
  public author: string;
  public description: string;
  public pages: number;

  // constructor and other methods
}

class Persistence {
  public saveToFile(book: Book): void {
    // some fs.write method to save book to file
  }
}