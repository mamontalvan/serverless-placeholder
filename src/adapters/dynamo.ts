import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  GetCommand,
  GetCommandInput,
  GetCommandOutput,
  PutCommand,
  PutCommandInput,
  PutCommandOutput,
  QueryCommand,
  QueryCommandInput,
  QueryCommandOutput,
  UpdateCommand,
  UpdateCommandInput,
  UpdateCommandOutput,
} from '@aws-sdk/lib-dynamodb';


export class DynamoAdapter {
  private readonly client: DynamoDBClient;

  constructor() {
    const dynamoClient = new DynamoDBClient({region: process.env.AWS_REGION});
    

    this.client = DynamoDBDocumentClient.from(dynamoClient);
  }

  async get(params: GetCommandInput): Promise<GetCommandOutput> {
    return this.client.send(new GetCommand(params));
  }

  async query(params: QueryCommandInput): Promise<QueryCommandOutput> {
    return this.client.send(new QueryCommand(params));
  }

  async put(params: PutCommandInput): Promise<PutCommandOutput> {
    return this.client.send(new PutCommand(params));
  }

  async update(params: UpdateCommandInput): Promise<UpdateCommandOutput> {
    return this.client.send(new UpdateCommand(params));
  }
}

