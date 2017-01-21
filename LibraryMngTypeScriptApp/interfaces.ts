import { Category, Gender, CutomerType } from './enums';

interface IBook {
    Id: number;
    Title: string;
    Author: string;
    Available: boolean;
    Category: Category;
    Pages?: number;
    MarkDamaged?: IDamaged;
}

interface IDamaged {
    (reason: string) : void;
}

interface IPerson {
    Name: string;
    Email: string;
    Age: number;
    Gender: Gender;
}

interface ICustomer extends IPerson {
    Id: number;
    CutomerType: CutomerType;
}

interface IOrder {
    Customer: ICustomer;
    Books: IBook[];
}

export { IBook, IDamaged, IPerson, ICustomer, IOrder };