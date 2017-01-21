import { Category, Gender } from './enums';

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

export { IBook, IDamaged, IPerson };