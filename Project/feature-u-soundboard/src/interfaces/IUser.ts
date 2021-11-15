import { IDataObject } from './IDataObject';

export interface IUser extends IDataObject {
  id: string;
  username: string;
  email: string;
  password: string;
}
