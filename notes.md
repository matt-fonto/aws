# AWS

## Core Services

1. EC2 (Elastic Computer Cloud)

- Virtual servers (VMs) for running apps
- Use case: custom backends, cron jobs, etc.

2. Lambda

- Serverless functions. You write code, AWS handles the infrastructure
- Pay-per-invocation. Great for APIs, background jobs

3. S3 (Simple Storage Service)

- Object store (e.g., images, videos, backups)
- Versioning, lifecycle rules, and static website hosting

4. RDS / Aurora

- Managed SQL databases (PostgreSQL, MySQ, etc)
- Auto backups, scaling, and failover support

5. DynamoDB

- Serverless NoSQL DB with ultra-low latency
- Greate for key-value or document use cases

6. API Gateway

- Define and expose REST/HTTP APIs
- Works great with Lambda for serverless APIs

7. CloudFront

- CDN to distribute your frontend, media, or API globally with low latency

8. Route 53

- DNS Service, domain registration, routing policies

## Dev Essentials

- IAM (Identity & Access Management): Secure resources. Create roles, policies, and least privilige access
- VPC (Virtual Private Cloud): Network layering. Define subnets, firewalls (security groups), routing
- CloudWatch: Logging, metrics, and alarms. Monitor performance and errors
- Secrets manager / Parameter store: Securely store credentials, tokens, config
- CodePipeline + CodeBuild + CodedDeploy: CI/CD tools for automating deployment
