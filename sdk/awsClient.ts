import { S3Client } from "@aws-sdk/client-s3";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { LambdaClient } from "@aws-sdk/client-lambda";
import { CloudWatchLogsClient } from "@aws-sdk/client-cloudwatch-logs";
import { RDSDataClient } from "@aws-sdk/client-rds-data";

const REGION = "eu-central-1";

export const s3 = new S3Client({ region: REGION });
export const dynamo = new DynamoDBClient({ region: REGION });
export const lambda = new LambdaClient({ region: REGION });
export const logs = new CloudWatchLogsClient({ region: REGION });
export const rds = new RDSDataClient({ region: REGION });
