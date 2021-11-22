import {IUser} from "./IUser";

export interface IRequest extends Request {
    user?: IUser;
}
