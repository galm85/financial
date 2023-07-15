import { User } from "./User";

export type Action = {
    type:string;
    payload:any;
}


export type State = {
   usersReducers:UserReducer;
}


export type UserReducer = {
    user:User | null;
}

