<!--suppress ES6UnusedImports -->
<script setup lang="ts">
import AWSALB from 'aws-icons/icons/ArchitectureElasticLoadBalancing.svg';
import AWSApiGateway from "aws-icons/icons/ArchitectureAmazonAPIGateway.svg";
import AWSCloudFront from "aws-icons/icons/ArchitectureAmazonCloudFront.svg";
import AWSCloudWatch from "aws-icons/icons/ArchitectureAmazonCloudWatch.svg";
import AWSCognito from "aws-icons/icons/ArchitectureAmazonCognito.svg";
import AWSDynamoDB from "aws-icons/icons/ArchitectureAmazonDynamoDB.svg";
import AWSECR from 'aws-icons/icons/ArchitectureAmazonElasticContainerRegistry.svg';
import AWSECS from 'aws-icons/icons/ArchitectureAmazonElasticContainerService.svg';
import AWSEventBridge from "aws-icons/icons/ArchitectureAmazonEventBridge.svg";
import AWSFargate from 'aws-icons/icons/ArchitectureAWSFargate.svg';
import AWSIAM from "aws-icons/icons/ArchitectureAWSIdentityandAccessManagement.svg";
import AWSLambda from "aws-icons/icons/ArchitectureAWSLambda.svg";
import AWSRDS from 'aws-icons/icons/ArchitectureAmazonRDS.svg';
import AWSS3 from "aws-icons/icons/ArchitectureAmazonSimpleStorageService.svg";
import AWSSNS from "aws-icons/icons/ArchitectureAmazonSimpleNotificationService.svg";
import AWSSSM from "aws-icons/icons/ArchitectureAWSSystemsManager.svg";
import AWSStepFunctions from "aws-icons/icons/ArchitectureAWSStepFunctions.svg";

const AWS_ICONS = {
  "ALB": AWSALB,
  "AWSCognito": AWSCognito,
  "ApiGateway": AWSApiGateway,
  "CloudFront": AWSCloudFront,
  "CloudWatch": AWSCloudWatch,
  "DynamoDB": AWSDynamoDB,
  "ECR": AWSECR,
  "ECS": AWSECS,
  "EventBridge": AWSEventBridge,
  "Fargate": AWSFargate,
  "IAM": AWSIAM,
  "Lambda": AWSLambda,
  "RDS": AWSRDS,
  "S3": AWSS3,
  "SNS": AWSSNS,
  "SSM": AWSSSM,
  "StepFunctions": AWSStepFunctions,
} as const;
type AWSIconNames = keyof typeof AWS_ICONS;

const { name } = defineProps<{ name: AWSIconNames }>();
const selectedIcon: string = AWS_ICONS[name]

</script>

<template>
  <section class="aws-service-card">
    <header>
      <img
        :src="selectedIcon"
        :alt="`AWS ${name} icon`"
      >
      <h4>{{ name }}</h4>
    </header>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur culpa eveniet recusandae sed. Beatae culpa facilis itaque nam quidem totam voluptas voluptatibus! At excepturi, labore libero officiis optio veniam?</p>
  </section>
</template>

<style scoped>
.aws-service-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid var(--font-color-200);
  border-radius: .5rem;
  background-color: var(--bg-color-800);
}
header {
  display: flex;
  align-items: center;
  gap: 1rem;
}
img {
  height: 2em;
  width: 2em;
}
</style>