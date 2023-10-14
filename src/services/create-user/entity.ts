import { IUser } from "../../utils/interfaces";

export class UserEntity {
    static saveUser(user: IUser) {
        return {
          TableName: process.env.USER_TABLE_NAME!,
          Item: user,
          ConditionExpression: 'attribute_not_exists(id)',
        };
      }  
}