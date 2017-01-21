
import { Category } from './enums';
import { IBook, IDamaged } from './interfaces';

function GetAllBooks(): IBook[] {
    let books = [
        { Id: 1, Title: 'Harry Potter', Author: 'J. K. Rowling', Available: true, Category: Category.Fiction, Pages: 687 },
        { Id: 2, Title: 'A Connecticut Yankee in King Aurthers Court', Author: 'Mark Twain', Available: true, Category: Category.Fiction, Pages: 699 },
        { Id: 3, Title: 'A Tale of Two Cities', Author: 'Charles Dicleens', Available: true, Category: Category.FictionHistory, Pages: 713 },
        { Id: 4, Title: 'Diary of A Serial Killer', Author: 'B. Cameron Lee', Available: true, Category: Category.Fiction, Pages: 733 },
        { Id: 5, Title: 'Divergent(Series)', Author: 'Veronica Roth', Available: true, Category: Category.Fiction, Pages : 746 },
        { Id: 6, Title: 'The Identity Check', Author: 'Ken Merrell', Available: true, Category: Category.Fiction, Pages : 769 },
        { Id: 7, Title: 'The Moonstone', Author: 'Wilkie Collins', Available: true, Category: Category.Fiction, Pages : 787 },
        { Id: 8, Title: 'The Wonderful Wizard of Oz', Author: 'L. Frank Baum', Available: true, Category: Category.Fiction, Pages: 806 },
        { Id: 9, Title: 'Uncle Toms Cabin', Author: 'Harriet Beecher Stowe', Available: true, Category: Category.Fiction, Pages: 828 },
        { Id: 10, Title: 'The Three Musketeers', Author: 'Alexandrae Dumas', Available: true, Category: Category.FictionHistory, Pages: 845 },
        { Id: 11, Title: 'Mysterious Island', Author: 'Joules Verne', Available: true, Category: Category.Fiction, Pages : 870 },
        { Id: 12, Title: 'Around The World in 80 Days', Author: 'Joules Verne', Available: true, Category: Category.Fiction, Pages: 897 },
        { Id: 13, Title: 'Enders Game', Author: 'Orson Scott Card', Available: true, Category: Category.ScienceFiction, Pages: 921 },
        { Id: 14, Title: 'Hyperion', Author: 'Dan Simmons', Available: true, Category: Category.ScienceFiction, Pages: 950 },
        { Id: 15, Title: 'The Time Machine', Author: 'H.G.Wells', Available: true, Category: Category.ScienceFiction, Pages: 973 },
        { Id: 16, Title: 'Starship Troops', Author: 'Robert A.Heinlein', Available: true, Category: Category.ScienceFiction, Pages: 999 },
        { Id: 17, Title: 'Ring World', Author: 'Larry Nilven', Available: true, Category: Category.ScienceFiction, Pages: 1021 },
        { Id: 18, Title: 'Foundation', Author: 'Isaac Isimov', Available: true, Category: Category.ScienceFiction, Pages: 1043 },
        { Id: 19, Title: 'I, Robot', Author: 'Isaac Isimov', Available: true, Category: Category.ScienceFiction, Pages: 1067 },
        { Id: 20, Title: 'The War of The Worlds', Author: 'H.G.Wells', Available: true, Category: Category.ScienceFiction, Pages: 1089 },
        { Id: 21, Title: 'Frankenstein', Author: 'Mary Shelley', Available: true, Category: Category.ScienceFiction, Pages: 1123 },
        { Id: 22, Title: 'To kill a Mokingbird', Author: 'Harper Lee', Available: true, Category: Category.Novel, Pages: 1167 },
        { Id: 23, Title: 'Angels and Demons', Author: 'Dan Brown', Available: true, Category: Category.Novel, Pages: 1197 },
        { Id: 24, Title: 'The DaVinci Code', Author: 'Dan Brown', Available: true, Category: Category.Novel, Pages: 1219 },
        { Id: 25, Title: 'The great Gatsby', Author: 'F.Scott Fitzgerald', Available: true, Category: Category.Novel, Pages: 1245 },
        { Id: 26, Title: 'The Lord of the Rings', Author: 'J.R.R.Tolkien', Available: true, Category: Category.Fiction, Pages: 1278 },
        { Id: 27, Title: 'Jane Eyre', Author: 'Charlotte Bronte', Available: true, Category: Category.Novel, Pages: 1298 },
        { Id: 28, Title: 'Pride and Prejudice', Author: 'Jane Austen', Available: true, Category: Category.Romance, Pages: 1365 },
        { Id: 29,Title: 'Love Story', Author: 'Erich Segal', Available: true, Category: Category.Romance, Pages: 1388 },
        { Id: 30,Title: 'Fifty Shades of Grey', Author: 'E.L.James', Available: true, Category: Category.Romance, Pages: 1435 },
        { Id: 31, Title: 'A Walk to Remember', Author: 'Nicholas Sparks', Available: true, Category: Category.Romance, Pages: 1467 },
        { Id: 32,Title: 'A Kingdom of Dreams', Author: 'Judith McNaught', Available: true, Category: Category.Romance, Pages: 1495 },
        { Id: 33,Title: 'Anna Karenina', Author: 'Leo Tolstoy', Available: true, Category: Category.Romance, Pages: 1534 },
        { Id: 34,Title: 'Rebecca', Author: 'Daphne du Maurier', Available: true, Category: Category.Romance, Pages: 1569 },
        { Id: 35,Title: 'The Fault in Our Stars', Author: 'John Green', Available: true, Category: Category.Romance, Pages: 1597 },
        { Id: 36,Title: 'The Princess Bride', Author: 'William Goldman', Available: true, Category: Category.Romance, Pages: 1645 },
        { Id: 37,Title: 'War and Peace', Author: 'Leo Tolstoy', Available: true, Category: Category.HistoricalNovel, Pages: 1689 },
        { Id: 38,Title: 'The Pillars Of The Earth', Author: 'Ken Follett', Available: true, Category: Category.HistoricalNovel, Pages: 1724 },
        { Id: 39,Title: 'The Book Thief', Author: 'Markus Zusak', Available: true, Category: Category.HistoricalNovel, Pages: 1786 },
        { Id: 40,Title: 'All the Light We Cannot See', Author: 'Anthony Duerr', Available: true, Category: Category.HistoricalNovel, Pages: 456 },
        { Id: 41,Title: 'The Haunting of Hill House', Author: 'Shirley Jackson', Available: true, Category: Category.Horror, Pages: 798 },
        { Id: 42,Title: 'Dracula', Author: 'Bram Stoker', Available: true, Category: Category.Horror, Pages: 667 },
        { Id: 43,Title: 'Strange Case of Dr. Jekyll and Mr. Hyde', Author: 'Robert Louis Stevenson', Available: true, Category: Category.Horror, Pages: 690 },
        { Id: 44,Title: 'The Terror', Author: 'Dan Simmon', Available: true, Category: Category.Horror, Pages: 634 },
        { Id: 45,Title: 'Lord of the Fireflies', Author: 'William Golding', Available: true, Category: Category.YoungAdult, Pages: 690 },
        { Id: 46,Title: 'Vampire Academy', Author: 'Richelle Mead', Available: true, Category: Category.YoungAdult, Pages: 567 },
        { Id: 47,Title: 'Thirteen Reasons Why', Author: 'Jay Asher', Available: true, Category: Category.YoungAdult, Pages: 623 },
        { Id: 48,Title: 'Percy Jackson(Series)', Author: 'Rick Riordan', Available: true, Category: Category.YoungAdult, Pages: 678 },
        { Id: 49,Title: 'The Hunger Games(Series)', Author: 'Suzanne Collins', Available: true, Category: Category.YoungAdult, Page: 412 },
        { Id: 50,Title: 'The Maze Runner', Author: 'James Dashner', Available: true, Category: Category.YoungAdult, Pages: 756 },
        { Id: 51,Title: 'Silent Spring', Author: 'Rachel Carson', Available: true, Category: Category.NonFiction, Pages: 487 },
        { Id: 52,Title: 'A Brief History Of Time', Author: 'Stephen Hawking', Available: true, Category: Category.NonFiction, Pages: 496 },
        { Id: 53,Title: 'The Room Of Ones Own', Author: 'Virginia Woolf', Available: true, Category: Category.NonFiction, Pages: 436 },
        { Id: 54, Title: 'Black Boy', Author: 'Richard Wright', Available: true, Category: Category.NonFiction, Pages: 754 }
    ];
    return books
}

function GetBookById(bookId: number) {
    let books = GetAllBooks();
    return books.filter(function (book) { return book.Id === bookId; })[0];
}

function GetBookByCategory(Category: Category) {
    let books = GetAllBooks();
    let filteredBooks = [];
    for (var i = 0; i < books.length; ++i) {
        var currentBook = GetAllBooks()[i];
        if (currentBook.Category === Category) {
            filteredBooks.push(currentBook);
        }
    }
    return filteredBooks;
}

function DisplayBook(book: IBook) {
    let isAvailable: string;
    isAvailable = (book.Available === true) ? 'Yes' : 'No';
    console.log('Book S.I : ' + book.Id);
    console.log('Book Name : ' + book.Title);
    console.log('Book Author : ' + book.Author);
    console.log('Book Category : ' + Category[book.Category]);
    console.log('Available : ' + isAvailable);
    console.log('Total Page : ' + book.Pages);
}

export { GetAllBooks, GetBookById, GetBookByCategory, DisplayBook };