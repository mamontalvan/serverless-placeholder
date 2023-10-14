import 'reflect-metadata';
import { container } from "tsyringe";
import { v4 as uuidv4 } from 'uuid';
import { IRequestRol, IRol } from '../../utils/interfaces';
import { DynamoAdapter } from '../../adapters/dynamo';
import { RolEntity } from './entity';


const dynamo = container.resolve(DynamoAdapter)

export const prepareRol = (paramsRol: IRequestRol) => {
  //if (validateExistRol(paramsRol)) throw new Error(' The rol name is already');
  
  const id = uuidv4();

  return {
    id,
    name: paramsRol.name
  }
}

export const validateExistRol = async (paramsRol: IRequestRol): Promise<Boolean> => {
  const paramsfindRolByName = RolEntity.findRolByName(paramsRol.name);
  console.log(paramsfindRolByName);
  try {
    const result = await dynamo.query(paramsfindRolByName);
    console.log(result);
    return (result || result[0]) ? true : false; 

  } catch (error) {
    console.log(error);
  }
}

export const saveRol = async(rol: IRol) => {
    const paramsRolEntity = RolEntity.saveRol(rol);
    await dynamo.put(paramsRolEntity);
}
