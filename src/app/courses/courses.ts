export interface Courses {
    type: string;

    number?: number;
    numberYear?:number;
    
    dateFirstStart?: string;
    dateFirstEnd?: string;
    deteSecondStart?: string;
    dateSecondEnd?: string
    place?: string;
    organizer?: string;
    numberUser?: number;
    chef?: string;
    instructors?: string[];
    status?: string;
}