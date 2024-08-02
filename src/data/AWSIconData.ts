import AWSApiGateway from "aws-icons/icons/ArchitectureAmazonAPIGateway.svg";
import AWSCloudFront from "aws-icons/icons/ArchitectureAmazonCloudFront.svg";
import AWSCloudWatch from "aws-icons/icons/ArchitectureAmazonCloudWatch.svg";
import AWSCognito from "aws-icons/icons/ArchitectureAmazonCognito.svg";
import AWSDynamoDB from "aws-icons/icons/ArchitectureAmazonDynamoDB.svg";
import AWSECR from "aws-icons/icons/ArchitectureAmazonElasticContainerRegistry.svg";
import AWSECS from "aws-icons/icons/ArchitectureAmazonElasticContainerService.svg";
import AWSELB from "aws-icons/icons/ArchitectureElasticLoadBalancing.svg";
import AWSEventBridge from "aws-icons/icons/ArchitectureAmazonEventBridge.svg";
import AWSFargate from "aws-icons/icons/ArchitectureAWSFargate.svg";
import AWSIAM from "aws-icons/icons/ArchitectureAWSIdentityandAccessManagement.svg";
import AWSLambda from "aws-icons/icons/ArchitectureAWSLambda.svg";
import AWSRDS from "aws-icons/icons/ArchitectureAmazonRDS.svg";
import AWSS3 from "aws-icons/icons/ArchitectureAmazonSimpleStorageService.svg";
import AWSSNS from "aws-icons/icons/ArchitectureAmazonSimpleNotificationService.svg";
import AWSSSM from "aws-icons/icons/ArchitectureAWSSystemsManager.svg";
import AWSStepFunctions from "aws-icons/icons/ArchitectureAWSStepFunctions.svg";

export type AWSIconData = {
  icon: string,
  title: string,
  description: string,
}

export const AWS_ICONS: {[key: string]: AWSIconData} = {
  ALB: {
    icon: AWSELB,
    title: "Elastic Load Balancer",
    description: "Amazon Elastic Load Balancing (ELB) automatically distributes incoming application traffic across multiple targets, such as EC2 instances, containers, and IP addresses, in one or more availability zones, enhancing the availability and fault tolerance of your applications."
  },
  ApiGateway: {
    icon: AWSApiGateway,
    title: "Amazon API Gateway",
    description: "Amazon API Gateway is a fully managed service that allows developers to create, publish, maintain, monitor, and secure APIs at any scale. It acts as a \"front door\" for applications to access data, business logic, or functionality from backend services."
  },
  CloudFront: {
    icon: AWSCloudFront,
    title: "Amazon CloudFront",
    description: "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds."
  },
  CloudWatch: {
    icon: AWSCloudWatch,
    title: "Amazon Cloud Watch",
    description: "Amazon CloudWatch is a monitoring and observability service that provides data and actionable insights for AWS, hybrid, and on-premises applications and infrastructure. It helps you monitor your applications, optimize resource utilization, and respond to system-wide performance changes."
  },
  Cognito: {
    icon: AWSCognito,
    title: "Amazon Cognito",
    description: "Amazon Cognito provides user identity and access management for web and mobile applications. It enables secure user sign-up, sign-in, and access control, integrating with social identity providers and enterprise identity providers via SAML 2.0 and OpenID Connect."
  },
  DynamoDB: {
    icon: AWSDynamoDB,
    title: "Amazon DynamoDB",
    description: "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. It supports key-value and document data structures, making it ideal for applications that require consistent, low-latency data access."
  },
  ECR: {
    icon: AWSECR,
    title: "Amazon ECR",
    description: "Amazon Elastic Container Registry (ECR) is a fully managed Docker container registry that makes it easy to store, manage, and deploy container images. ECR integrates with Amazon ECS, EKS, and AWS Fargate for seamless container deployment."
  },
  ECS: {
    icon: AWSECS,
    title: "Amazon ECS",
    description: "Amazon Elastic Container Service (ECS) is a fully managed container orchestration service that allows you to easily run, stop, and manage Docker containers on a cluster of Amazon EC2 instances or with AWS Fargate."
  },
  EventBridge: {
    icon: AWSEventBridge,
    title: "Amazon Event Bridge",
    description: "Amazon EventBridge is a serverless event bus service that enables you to connect applications using data from your own applications, integrated AWS services, or Software-as-a-Service (SaaS) applications. It simplifies the process of building event-driven architectures."
  },
  Fargate: {
    icon: AWSFargate,
    title: "AWS Fargate",
    description: "AWS Fargate is a serverless compute engine for containers that works with both Amazon ECS and Amazon EKS. Fargate removes the need to provision and manage servers, allowing you to focus on building and running your applications."
  },
  IAM: {
    icon: AWSIAM,
    title: "AWS IAM",
    description: "AWS Identity and Access Management (IAM) enables you to securely control access to AWS services and resources for your users. It allows you to manage permissions and authentication for users, groups, and roles within your AWS environment."
  },
  Lambda: {
    icon: AWSLambda,
    title: "AWS Lambda",
    description: "AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers. You can execute code in response to events such as changes in data, shifts in system state, or user actions, and only pay for the compute time you consume."
  },
  RDS: {
    icon: AWSRDS,
    title: "Amazon RDS",
    description: "Amazon Relational Database Service (RDS) is a managed service that makes it easy to set up, operate, and scale a relational database in the cloud. It supports several database engines, including MySQL, PostgreSQL, MariaDB, Oracle, and SQL Server."
  },
  S3: {
    icon: AWSS3,
    title: "Amazon S3",
    description: "Amazon Simple Storage Service (S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. It is designed to store and retrieve any amount of data from anywhere on the web."
  },
  SNS: {
    icon: AWSSNS,
    title: "Amazon SNS",
    description: "Amazon Simple Notification Service (SNS) is a fully managed messaging service that allows you to send notifications from the cloud. SNS can be used to send direct messages to subscribers via email, SMS, or mobile push notifications, as well as to fan out messages to multiple services."
  },
  SSM: {
    icon: AWSSSM,
    title: "AWS Systems Manager",
    description: "AWS Systems Manager (SSM) provides a unified interface for managing your AWS resources, enabling you to automate operational tasks, maintain security and compliance, and improve visibility into your infrastructure."
  },
  StepFunctions: {
    icon: AWSStepFunctions,
    title: "AWS Step Functions",
    description: "AWS Step Functions is a serverless orchestration service that lets you coordinate multiple AWS services into serverless workflows. It simplifies the process of building complex, distributed applications, allowing you to design and run workflows that stitch together services like Lambda, ECS, and more."
  },
} as const;