import { User } from "./User";

export type Action = {
    type:string;
    payload:any;
}


export type State = {
   userReducer:UserReducer;
}


export type UserReducer = {
    user:User | null;
}

