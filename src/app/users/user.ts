export interface User {
    _id?: string;
    user: string;
    password: string;
    name?: string;
    surname?: string;
    class?: string;
    classNumber?: string;
    classDate: string;
    zhpclass?: string;
    inspektorat?: string;
    telephone?: number;
    telephoneAble: boolean;
    address?: string;
    veryfication?: string;
    status?: string;
    about?: string;
}