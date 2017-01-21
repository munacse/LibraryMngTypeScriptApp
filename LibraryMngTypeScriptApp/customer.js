"use strict";
var enums_1 = require("./enums");
var Customer = (function () {
    function Customer() {
    }
    return Customer;
}());
exports.Customer = Customer;
function AllRegisteredCustomer() {
    var customers = [
        { Name: 'Muna', Email: 'engmunacse@gmail.com', Age: 27, Gender: enums_1.Gender.Male, Phone: '0173724989' },
        { Name: 'Saom', Email: 'saom@gmail.com', Age: 13, Gender: enums_1.Gender.Male, Phone: '01711944677' },
        { Name: 'Saifan', Email: 'saifan@gmail.com', Age: 6, Gender: enums_1.Gender.Male, Phone: '01714359865' },
        { Name: 'Prapty', Email: 'prapty@gmail.com', Age: 19, Gender: enums_1.Gender.Female, Phone: '018652390' }
    ];
    return customers;
}
exports.AllRegisteredCustomer = AllRegisteredCustomer;
function DisplayCustomer(customer) {
    console.log('Customer Name : ' + customer.Name);
    console.log('Email : ' + customer.Email);
    console.log('Age : ' + customer.Age);
    console.log('Gender : ' + enums_1.Gender[customer.Gender]);
    console.log('Phone : ' + customer.Phone);
}
exports.DisplayCustomer = DisplayCustomer;
function AddCustomer(customer) {
    var customers = AllRegisteredCustomer();
    customers.push(customer);
    return customers;
}
exports.AddCustomer = AddCustomer;
//# sourceMappingURL=customer.js.map