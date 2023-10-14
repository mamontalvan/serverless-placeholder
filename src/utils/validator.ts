import { IRequestUser,
         IRequestRol } from "./interfaces";
         
export class Validator {

  validateBodyUser(event: IRequestUser){
    const { email, password, role } = event;
    return { email, password, role };
  }

  validateBodyRol(event: IRequestRol) {
    const { name } = event;
    return { name };
  }
}

