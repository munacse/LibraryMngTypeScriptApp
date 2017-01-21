"use strict";
var book_1 = require("./book");
var customer_1 = require("./customer");
function ProcessBookOrder(customerId, bookIds) {
    var cutomer = customer_1.GetCustomerById(customerId);
    var books = [];
    for (var i = 0; i < bookIds.length; ++i) {
        var book = book_1.GetBookById(bookIds[i]);
        if (book != undefined)
            books.push(book);
    }
    DisplayOrder(cutomer, books);
}
exports.ProcessBookOrder = ProcessBookOrder;
function DisplayOrder(customer, books) {
    console.log('----- Customer Info -----');
    customer_1.DisplayCustomer(customer);
    console.log('----- Book Order Info -----');
    console.log('Total Book : ' + books.length);
    books.forEach(function (book) { return book_1.DisplayBook(book); });
}
//# sourceMappingURL=order.js.map