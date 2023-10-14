
import middy from '@middy/core';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { Validator } from '../../utils/validator';
import { IRequestUser, IUser } from '../../utils/interfaces';
import { prepareUser, saveUser } from '../../services/create-user/service';

const validator = new Validator();

const createUser = async (_event: APIGatewayProxyEvent) => {
  const paramsValidated: IRequestUser = validator.validateBodyUser(JSON.parse(_event.body));
  const user: IUser = prepareUser (paramsValidated);

  try {
    await saveUser(user);
    const response = {
      statusCode: 200,
      body: JSON.stringify(`Rol was successfully created`),
    };
    return response;

  } catch (error) {
    console.log(error);
  }   
};

export const handler = middy(createUser)