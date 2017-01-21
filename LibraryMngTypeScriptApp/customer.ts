
import { Category, Gender, CutomerType } from './enums';
import { IBook, ICustomer } from './interfaces';

class Customer implements ICustomer {
    Id: number;
    Name: string;
    Email: string;
    Age: number;
    Gender: Gender;
    Phone: string;
    CutomerType: CutomerType;
}

function AllRegisteredCustomer() {
    let customers = [
        { Id : 1, Name: 'Muna', Email: 'engmunacse@gmail.com', Age: 27, Gender: Gender.Male, Phone: '0173724989', CutomerType: CutomerType.Regular },
        { Id : 2, Name: 'Emon', Email: 'emon@gmail.com', Age: 28, Gender: Gender.Male, Phone: '0173546797', CutomerType: CutomerType.Monthy },
        { Id : 3, Name: 'Saom', Email: 'saom@gmail.com', Age: 13, Gender: Gender.Male, Phone: '01711944677', CutomerType: CutomerType.Irregular },
        { Id : 4, Name: 'Saifan', Email: 'saifan@gmail.com', Age: 6, Gender: Gender.Male, Phone: '01714359865', CutomerType: CutomerType.Weekly },
        { Id : 5, Name: 'Prapty', Email: 'prapty@gmail.com', Age: 19, Gender: Gender.Female, Phone: '018652390', CutomerType: CutomerType.Irregular }
    ];
    return customers;
}

function DisplayCustomer(customer: Customer) {
    console.log('Customer Name : ' + customer.Name);
    console.log('Email : ' + customer.Email);
    console.log('Age : ' + customer.Age);
    console.log('Gender : ' + Gender[customer.Gender]);
    console.log('Phone : ' + customer.Phone);
}

function AddCustomer(customer: Customer): Customer[] {
    let customers = AllRegisteredCustomer();
    customers.push(customer);
    return customers;
}

function GetCustomerById(customerId: number) {
    let customers = AllRegisteredCustomer();
    return customers.filter(function (customer) { return customer.Id === customerId })[0];
}

export { Customer, AllRegisteredCustomer, DisplayCustomer, AddCustomer, GetCustomerById };