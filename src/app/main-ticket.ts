import { User } from './user';

/**
 * @author Mounica
 */
export class MainTicket {
    email:string;
    id:number;
    createdOn:Date;
    updatedOn:Date;
    user:User;
    priority:number;
    status:string;
}
