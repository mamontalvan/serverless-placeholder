import 'reflect-metadata';
import { container } from "tsyringe";
import { v4 as uuidv4 } from 'uuid';
import { IRequestUser, IRol, IUser } from "../../utils/interfaces";
import { DynamoAdapter } from '../../adapters/dynamo';
import { UserEntity } from "./entity";

const dynamo = container.resolve(DynamoAdapter)

export const prepareUser = async(paramsUser: IRequestUser): Promise<IUser> => {

  const roleId = (await getRolId(paramsUser.role)).id;
    
  const id = uuidv4();
  
  return {
    id,
    email: paramsUser.email,
    password: paramsUser.password,
    roleId
  }
}

const getRolId = async(roleName: string): Promise<IRol> => {
  const paramsfindRolByName = RolEntity.findRolByName(paramsRol.name);

  try {
    const result = await dynamo.query(paramsfindRolByName);
    console.log(result);
    return result[0];

  } catch (error) {
    console.log(error);
  }    

}

export const saveUser = async(user: IUser) => {
    const paramsRolEntity = UserEntity.saveUser(user);
    await dynamo.put(paramsRolEntity);
}
