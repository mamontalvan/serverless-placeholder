
import middy from '@middy/core';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { Validator } from '../../utils/validator';
import { IRequestRol } from '../../utils/interfaces';
import { saveRol, prepareRol } from '../../services/create-rol/service';
import { ResponseService } from '../../utils/reponse';

const validator = new Validator();

const createRol = async (_event: APIGatewayProxyEvent) => {

  const paramsValidated: IRequestRol = validator.validateBodyRol(JSON.parse(_event.body));
  const rol = prepareRol (paramsValidated);
  console.log(rol);

  try {
    await saveRol(rol);
    const response = {
      statusCode: 200,
      body: JSON.stringify(`Rol was successfully created`),
    };
    return response;

  } catch (error) {
    console.log(error);
  } 
  
};

export const handler = middy(createRol)