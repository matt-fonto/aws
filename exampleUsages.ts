import { PutObjectCommand } from "@aws-sdk/client-s3";
import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { InvokeCommand } from "@aws-sdk/client-lambda";
import { PutLogEventsCommand } from "@aws-sdk/client-cloudwatch-logs";
import { ExecuteStatementCommand } from "@aws-sdk/client-rds-data";
import { dynamo, s3, lambda, logs, rds } from "./awsClient";

// upload file to S3
await s3.send(
  new PutObjectCommand({
    Bucket: "my-bucket",
    Key: "hello.txt",
    Body: "Hello AWS From TS",
  })
);

// write to DynamoDB
await dynamo.send(
  new PutItemCommand({
    TableName: "Users",
    Item: {
      userId: { S: "123" },
      email: { S: "user@example.com" },
    },
  })
);

// invoke lambda
await lambda.send(
  new InvokeCommand({
    FunctionName: "myLambdaFunction",
    Payload: Buffer.from(JSON.stringify({ action: "ping" })),
  })
);

// write log to CloudWatch
await logs.send(
  new PutLogEventsCommand({
    logGroupName: "my-log-group",
    logStreamName: "my-log-stream",
    logEvents: [{ timestamp: Date.now(), message: "user signed in" }],
  })
);

// Query RDS (via Data API)
await rds.send(
  new ExecuteStatementCommand({
    resourceArn: "arn:aws:rds:eu-central-1:123456789:cluster:my-db",
    secretArn: "arn:aws:secretsmanager:...:secret:my-db-creds",
    sql: "SELECT * FROM users LIMIT 5",
    database: "mydb",
  })
);
