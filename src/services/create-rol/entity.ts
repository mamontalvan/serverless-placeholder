import { IRol } from "../../utils/interfaces";

export class RolEntity {

  static saveRol(rol: IRol) {
    return {
      TableName: process.env.ROL_TABLE_NAME!,
      Item: rol,
      ConditionExpression: 'attribute_not_exists(id)',
    };
  }

  static findRolByName(rolName: string) {
    return {
      TableName: process.env.ROL_TABLE_NAME!,
      KeyConditionExpression: '#name = :name',
      ExpressionAttributeValues: {
        ':name': rolName
      },
      ExpressionAttributeNames: {
        '#name': 'name'
      }
    };    
  }
}
