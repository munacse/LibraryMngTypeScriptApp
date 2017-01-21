"use strict";
var enums_1 = require("./enums");
var customer_1 = require("./customer");
//let books = GetAllBooks();
//console.log(GetBookByCategory(Category.Fiction));
//console.log(book)
//let book = GetBookById(40);
//DisplayBook(book);
//books.forEach(book => DisplayBook(book));
//let customers = AllRegisteredCustomer();
//customers.forEach(customer => DisplayCustomer(customer));
var customer = {
    Name: 'Mahir',
    Email: 'mahir@gmail.com',
    Age: 2,
    Gender: enums_1.Gender.Male,
    Phone: '01675230976'
};
var customers = customer_1.AddCustomer(customer);
customers.forEach(function (customer) { return customer_1.DisplayCustomer(customer); });
//# sourceMappingURL=app.js.map