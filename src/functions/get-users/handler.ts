
import middy from '@middy/core';
import { getUsersPlaceHolder } from '../../services/getUsers/service';
import 'dotenv/config';

const getUsers = async (_event) => {

  try {
    const users = await getUsersPlaceHolder();

    const response = {
      statusCode: 200,
      body: JSON.stringify(users),
    };
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const handler = middy(getUsers)