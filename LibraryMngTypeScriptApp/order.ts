import { Category, Gender, CutomerType } from './enums';
import { IBook, IDamaged, ICustomer, IOrder } from './interfaces';
import { GetAllBooks, GetBookById, GetBookByCategory, DisplayBook } from './book';
import { Customer, AllRegisteredCustomer, DisplayCustomer, AddCustomer, GetCustomerById } from './customer';

function ProcessBookOrder(customerId: number, bookIds: number[]): void{
    let cutomer = GetCustomerById(customerId);
    let books: IBook[] =[];
    for (var i = 0; i < bookIds.length; ++i) {
        let book = GetBookById(bookIds[i]);
        if (book != undefined)
            books.push(book);
    }
    DisplayOrder(cutomer, books);
}

function DisplayOrder(customer: Customer, books: IBook[]): void{
    console.log('----- Customer Info -----');
    DisplayCustomer(customer);
    console.log('----- Book Order Info -----');
    console.log('Total Book : ' + books.length);
    books.forEach(book => DisplayBook(book));
}

export { ProcessBookOrder };