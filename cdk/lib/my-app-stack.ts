import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";

export class MyAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // S3 (static frontend)
    const siteBucket = new s3.Bucket(this, "SiteBucket", {
      websiteIndexDocument: "index.html",
      publicReadAccess: true,
    });

    // DynamoDB table
    const table = new dynamodb.Table(this, "UsersTable", {
      partitionKey: { name: "userId", type: dynamodb.AttributeType.STRING },
      billingMode: dynamo.BillingMode.PAY_PER_REQUEST,
    });

    // Lambda function
    const apiFn = new lambda.Function(this, "ApiHandler", {
      runtime: lambda.Runtime.NODE_JS_X,
      handler: "index.handler",
      code: lambda.Code.fromAsset("lambda"), // folder with function code
      environment: {
        TABLE_NAME: table.tableName,
      },
    });

    // allow lambda to read/write DynamoDB
    table.grantReadWriteData(apiFn);

    new apigateway.LambdaRestApi(this, "ApiEndpoint", {
      handler: apiFn,
      proxy: true,
    });
  }
}
