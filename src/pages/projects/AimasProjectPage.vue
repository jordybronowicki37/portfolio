<script setup lang="ts">
import Editor from "../../components/Editor.vue";
import EditorLine from "../../components/EditorLine.vue";
import ImageTextCombinedView from "../../components/ImageTextCombinedView.vue";
import "./ProjectPage.css";
import ProjectProperties from "../../components/ProjectProperties.vue";
import AWSCloudFront from "aws-icons/icons/ArchitectureAmazonCloudFront.svg";
import AWSApiGateway from "aws-icons/icons/ArchitectureAmazonAPIGateway.svg";
import AWSDynamoDB from "aws-icons/icons/ArchitectureAmazonDynamoDB.svg";
import AWSS3 from "aws-icons/icons/ArchitectureAmazonSimpleStorageService.svg";
import AWSLambda from "aws-icons/icons/ArchitectureAWSLambda.svg";
import AWSStepFunctions from "aws-icons/icons/ArchitectureAWSStepFunctions.svg";
import AWSEventBridge from "aws-icons/icons/ArchitectureAmazonEventBridge.svg";
import AWSSNS from "aws-icons/icons/ArchitectureAmazonSimpleNotificationService.svg";
</script>

<template>
  <div class="project-page">
    <Editor>
      <EditorLine :indentation="0" />
      <EditorLine :indentation="0" />
      <EditorLine :indentation="1">
        <h2>Project: Task Manager</h2>
      </EditorLine>
      <EditorLine :indentation="1">
        <div class="tags-wrapper">
          <ProjectProperties
            :languages="['python', 'typescript', 'html', 'sass']"
            :frameworks="['sam', 'websocket', 'react', 'redux']"
            database="dynamodb"
            deployment="aws"
            type="school"
            :group-size="2"
            status="completed"
          />
        </div>
      </EditorLine>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <ImageTextCombinedView>
          <template #text>
            <div>
              <h3>Live insights into all incidents</h3>
              <section>
                Get a live overview of all the incidents that are occurring on the dutch motorways.
              </section>
            </div>
          </template>
          <template #image>
            <img
              src="/aimas-overview.png"
              alt="Accidents overview"
              class="project-image"
            >
          </template>
        </ImageTextCombinedView>
      </EditorLine>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <section>
          <h3 class="list-title">
            Features
          </h3>
          <ul>
            <li>
              <h4>Live updates</h4>
              <p>
                All the accident and incident data gets updated every 5 minutes.
              </p>
            </li>
            <li>
              <h4>Overview page</h4>
              <p>
                View all active accidents and incidents.
              </p>
            </li>
            <li>
              <h4>Order towing services</h4>
              <p>
                Create orders for towing services to come and help at the incident. The order is send to three separate
                api's. An employee can either accept, deny or ignore the order. If multiple towing services accept the
                order, then a random service gets chosen and the others get cancelled.
              </p>
            </li>
          </ul>
        </section>
      </EditorLine>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <section>
          <h3 class="list-title">
            Used Amazon Web Services
          </h3>
          <ul class="services-list">
            <li>
              <img
                :src="AWSCloudFront"
                alt="AWS Cloudfront icon"
              >
              <p>Cloudfront</p>
            </li>
            <li>
              <img
                :src="AWSDynamoDB"
                alt="AWS DynamoDB icon"
              >
              <p>DynamoDB</p>
            </li>
            <li>
              <img
                :src="AWSApiGateway"
                alt="AWS API gateway icon"
              >
              <p>API-Gateway</p>
            </li>
            <li>
              <img
                :src="AWSStepFunctions"
                alt="AWS Step Functions icon"
              >
              <p>Step Functions</p>
            </li>
            <li>
              <img
                :src="AWSEventBridge"
                alt="AWS Event Bridge icon"
              >
              <p>Event Bridge</p>
            </li>
            <li>
              <img
                :src="AWSSNS"
                alt="AWS SNS icon"
              >
              <p>SNS</p>
            </li>
            <li>
              <img
                :src="AWSLambda"
                alt="AWS Lambda icon"
              >
              <p>Lambda</p>
            </li>
            <li>
              <img
                :src="AWSS3"
                alt="AWS S3 icon"
              >
              <p>S3</p>
            </li>
          </ul>
        </section>
      </EditorLine>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="1" />
      <EditorLine :indentation="0" />
      <EditorLine :indentation="0" />
    </Editor>
  </div>
</template>

<style scoped>

</style>