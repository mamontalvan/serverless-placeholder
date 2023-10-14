export interface IRequestUser {
  email: string;
  role: string;
  password: string;
}

export interface IRequestRol {
  name: string;
}

export interface IRol {
  id: string;
  name: string;
}

export interface IUser {
  id: string;
  email: string;
  password: string;
  roleId: string;
}