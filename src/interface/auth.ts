export interface IAccount {
  email: string;
  password: string;
}

export interface IUser extends IAccount {
  firstname: string;
  lastname: string;
}

export interface ISignup extends IAccount {
  firstname: string;
  lastname: string;
}
