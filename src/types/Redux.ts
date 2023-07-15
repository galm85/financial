import { Expense } from "./Expense";
import { User } from "./User";

export type Action = {
    type:string;
    payload:any;
}


export type State = {
   usersReducers:UserReducer;
   expencesReducers:ExpencesReducer;
}


export type UserReducer = {
    user:User | null;
}

export type ExpencesReducer = {
   fixedExpences:Expense[];
   occasionalExpences:Expense[];
   outcome:number;
}

