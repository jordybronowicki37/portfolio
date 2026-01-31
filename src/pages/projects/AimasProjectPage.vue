<script setup lang="ts">
import EditorLine from "../../components/EditorLine.vue";
import ImageTextCombinedView from "../../components/ImageTextCombinedView.vue";
import ProjectProperties from "../../components/ProjectProperties.vue";
import AWSServiceCard from "../../components/AWSServiceCard.vue";
import TextDocBlock from "../../components/TextDocBlock.vue";
import EditorProject from "./EditorProject.vue";
import Bug from "../../components/Bug.vue";
import {aimasProjectCardData} from "../../data/ProjectCardsData.ts";
</script>

<template>
  <EditorProject>
    <EditorLine :indentation="0" />
    <EditorLine :indentation="0" />
    <EditorLine :indentation="1">
      <h1 id="project-aimas-title"># Project: AIMAS</h1>
    </EditorLine>

    <EditorLine :indentation="2" />
    <EditorLine :indentation="2">
      <TextDocBlock
        text="
          For this school assignment we had to work in pairs to create a serverless application in AWS using SAM.
          The assignment was to create an employee dashboard for an accident management company.
          The dashboard had to show the currently registered accidents on the dutch motorways.
          For this we would be using real world live data provided via an api call.
          "
      />
    </EditorLine>

    <section>
      <EditorLine :indentation="2">
        <Bug :bug-type="2" />
      </EditorLine>
      <EditorLine :indentation="2">
        <ImageTextCombinedView
          image-title="AIMAS Accidents overview"
          image-description="A live overview of all the incidents that are occurring on the dutch motorways."
        >
          <template #text>
            <div>
              <h2 id="project-aimas-live-insights">## Live insights into all incidents</h2>
              <p>Get a live overview of all the incidents that are occurring on the dutch motorways.</p>
            </div>
          </template>
          <template #image>
            <img
              src="/img/projects/aimas-overview.png"
              alt="Accidents overview"
              class="project-image"
            >
          </template>
        </ImageTextCombinedView>
      </EditorLine>
    </section>

    <section>
      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <h2 id="project-aimas-features" class="list-title">
          ## Features
        </h2>
      </EditorLine>
      <ul class="features-list">
        <EditorLine :indentation="2">
          <li>
            <h3 id="project-aimas-live-updates">Live updates</h3>
            <p>
              All the accident and incident data gets updated every 5 minutes.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h3 id="project-aimas-overview">Overview page</h3>
            <p>
              View all active accidents and incidents.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h3 id="project-aimas-order-towing">Order towing services</h3>
            <p>
              Create orders for towing services to come and help at the incident. The order is send to three separate
              api's. An employee can either accept, deny or ignore the order. If multiple towing services accept the
              order, then a random service gets chosen and the others get cancelled.
            </p>
          </li>
        </EditorLine>
      </ul>
    </section>

    <EditorLine :indentation="2" />
    <EditorLine :indentation="1" />
    <EditorLine :indentation="0" />
    <EditorLine :indentation="0" />

    <template #info>
      <ProjectProperties v-bind="aimasProjectCardData"/>
    </template>

    <template #aws>
      <ul class="aws-services-list">
        <li>
          <AWSServiceCard name="CloudFront" />
        </li>
        <li>
          <AWSServiceCard name="DynamoDB" />
        </li>
        <li>
          <AWSServiceCard name="ApiGateway" />
        </li>
        <li>
          <AWSServiceCard name="StepFunctions" />
        </li>
        <li>
          <Bug :bug-type="9">
            <AWSServiceCard name="EventBridge" />
          </Bug>
        </li>
        <li>
          <AWSServiceCard name="SNS" />
        </li>
        <li>
          <AWSServiceCard name="SSM" />
        </li>
        <li>
          <AWSServiceCard name="Lambda" />
        </li>
        <li>
          <AWSServiceCard name="S3" />
        </li>
      </ul>
    </template>
  </EditorProject>
</template>

<style scoped>

</style>
