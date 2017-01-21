
import { Category, Gender } from './enums';
import { IBook, IPerson } from './interfaces';

class Customer implements IPerson {
    Name: string;
    Email: string;
    Age: number;
    Gender: Gender;
    Phone: string;
}

function AllRegisteredCustomer() {
    let customers = [
        { Name: 'Muna', Email: 'engmunacse@gmail.com', Age: 27, Gender: Gender.Male, Phone : '0173724989' },
        { Name: 'Saom', Email: 'saom@gmail.com', Age: 13, Gender: Gender.Male, Phone : '01711944677' },
        { Name: 'Saifan', Email: 'saifan@gmail.com', Age: 6, Gender: Gender.Male, Phone: '01714359865' },
        { Name: 'Prapty', Email: 'prapty@gmail.com', Age: 19, Gender: Gender.Female, Phone: '018652390' }
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

export { Customer, AllRegisteredCustomer, DisplayCustomer, AddCustomer };