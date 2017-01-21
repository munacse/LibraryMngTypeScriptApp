
import { Category, Gender } from './enums';
import { IBook, IDamaged, IPerson } from './interfaces';
import { GetAllBooks, GetBookById, GetBookByCategory, DisplayBook } from './book';
import { Customer, AllRegisteredCustomer, DisplayCustomer, AddCustomer } from './customer';

//let books = GetAllBooks();
//console.log(GetBookByCategory(Category.Fiction));
//console.log(book)
//let book = GetBookById(40);
//DisplayBook(book);
//books.forEach(book => DisplayBook(book));

//let customers = AllRegisteredCustomer();
//customers.forEach(customer => DisplayCustomer(customer));

let customer = {
    Name: 'Mahir',
    Email: 'mahir@gmail.com',
    Age: 2,
    Gender: Gender.Male,
    Phone: '01675230976'
};

let customers = AddCustomer(customer);
customers.forEach(customer => DisplayCustomer(customer));