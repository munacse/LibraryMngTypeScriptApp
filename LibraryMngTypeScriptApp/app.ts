
import { Category, Gender, CutomerType } from './enums';
import { IBook, IDamaged, ICustomer, IOrder } from './interfaces';
import { GetAllBooks, GetBookById, GetBookByCategory, DisplayBook } from './book';
import { Customer, AllRegisteredCustomer, DisplayCustomer, AddCustomer, GetCustomerById } from './customer';
import { ProcessBookOrder } from './order';

//let books = GetAllBooks();
//console.log(GetBookByCategory(Category.Fiction));
//console.log(book)
//let book = GetBookById(40);
//DisplayBook(book);
//books.forEach(book => DisplayBook(book));

//let customers = AllRegisteredCustomer();
//customers.forEach(customer => DisplayCustomer(customer));

//let customer = { Name: 'Mahir', Email: 'mahir@gmail.com', Age: 2, Gender: Gender.Male, Phone: '01675230976', CutomerType: CutomerType.Regular};
//let customers = AddCustomer(customer);
//customers.forEach(customer => DisplayCustomer(customer));

ProcessBookOrder(1, [4,34,2]);
