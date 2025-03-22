# AWS

## 1. Core Services

### 1.1 EC2 (Elastic Computer Cloud)

- Virtual servers (VMs) for running apps
- Use case: custom backends, cron jobs, etc.

### 1.2. Lambda

- Serverless functions. You write code, AWS handles the infrastructure
- Pay-per-invocation. Great for APIs, background jobs
- Run code in response to events (HTTP requests, file uploads, queues)
- Typically paired with API Gateway

### 1.3. S3 (Simple Storage Service)

- Object store (e.g., images, videos, backups)
- Versioning, lifecycle rules, and static website hosting
- Highly durable and scalable

### 1.4. RDS / Aurora

- Managed SQL databases (PostgreSQL, MySQ, etc)
- Auto backups, scaling, and failover support

### 1.5. DynamoDB

- Serverless NoSQL DB with ultra-low latency
- Greate for key-value or document use cases

### 1.6. API Gateway

- Define and expose REST/HTTP APIs
- Works great with Lambda for serverless APIs

### 1.7. CloudFront

- CDN to distribute your frontend, media, or API globally with low latency

### 1.8. Route 53

- DNS Service, domain registration, routing policies

## 2. Dev Essentials

- IAM (Identity & Access Management): Secure resources. Create roles, policies, and least privilige access
- VPC (Virtual Private Cloud): Network layering. Define subnets, firewalls (security groups), routing
- CloudWatch: Logging, metrics, and alarms. Monitor performance and errors
- Secrets manager / Parameter store: Securely store credentials, tokens, config
- CodePipeline + CodeBuild + CodedDeploy: CI/CD tools for automating deployment

## 3. Per category

### 3.1 Compute

- EC2: VMS for full control over OS, runtime, or custom backend (e.g., running Strapi or a containerized Node.js app)
- Lambda: Run functions on demand without managing servers (e.g., process S3 file upload, webhooks, background jobs)

### 3.2 Storage

- S3: Store files, assets, backups (e.g., React static builds, user-uploaded images)
- EBS: Disk volumes attached to EC2 (e.g., app data or database storage)
- Glacier: Archival storage (e.g., old logs, compliance data)

### 3.3 Database

- RDS: Managed SQL (PostgreSQL, MySQL) with backups, replication (e.g., backend relational data)
- DynamoDB: Serverless NoSQL, fast key-value access (e.g., session storage, IoT data)
- Aurora: High-performance, scalable SQL (e.g., SaaS multi-tenant app)

### 3.4 Networking & Routing

- VPC: Private network for your resources (e.g., EC2 + RDS inside private subnets)
- Route 53: Domain registration and DNS routing (e.g., `api.example.com` -> API Gateway)
- Elastic Load Balancer: Distribute traffic to multiple EC2 instances or containers

### 3.5 Security

- IAM: Manage who/what can access resources (e.g., Lambda role to access S3)
- IAM Identity Center (SSO): Centralized login across AWS org/accounts
- Secrets manager: Store secrets securely (e.g., DB passwords for Lambda)
- Security Hub: Centralized security posture and threat detection

### 3.6 Monitoring & Logging

- CloudWatch: Logs, metrics, alarms (e.g., Lambda log output, CPU usage alerts)
- CloudTrail: Audit logs of all API activity (e.g. track "who deleted that bucket")
- X-Ray: Trace requests across services (e.g., identify slow DynamoDB queries)

### 3.7 DevOps and IaC (Infrastructure as Code)

- CloudFormation: Define infra in YAML/JSON templates (e.g., deploy full stack with networking)
- CDK: Code-first CloudFormation using TypeScript/Python (e.g., programmatic deployment of Lambda + API + DynamoDB)
- CodePipeline / CodeBuild: CI/CD pipelines (e.g., auto-deploy from GitHub to Lambda/EC2)

### 3.8 Data Integration & ETL (Extract, Transform, Load)

- Glue: ETL service for cleaning and transforming data at scale (e.g., convert CSVs in S3 to Parquet for Athena)
- Athena: Query S3 with SQL (e.g., analytics dashboard over log files)
- Kinesis: Real-time data streams (e.g., live analytics from user actions)
