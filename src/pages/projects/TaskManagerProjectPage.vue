<script setup lang="ts">
import Editor from "../../components/Editor.vue";
import EditorLine from "../../components/EditorLine.vue";
import ImageTextCombinedView from "../../components/ImageTextCombinedView.vue";
import "./ProjectPage.css";
import ProjectProperties from "../../components/ProjectProperties.vue";
import AWSS3 from 'aws-icons/icons/ArchitectureAmazonSimpleStorageService.svg';
import AWSCF from 'aws-icons/icons/ArchitectureAmazonCloudFront.svg';
import AWSECS from 'aws-icons/icons/ArchitectureAmazonElasticContainerService.svg';
import AWSECR from 'aws-icons/icons/ArchitectureAmazonElasticContainerRegistry.svg';
import AWSRDS from 'aws-icons/icons/ArchitectureAmazonRDS.svg';
import AWSALB from 'aws-icons/icons/ArchitectureElasticLoadBalancing.svg';
import AWSFargate from 'aws-icons/icons/ArchitectureAWSFargate.svg';
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
            :languages="['java', 'typescript', 'html', 'sass']"
            :frameworks="['spring', 'react', 'redux']"
            database="postgresql"
            deployment="aws"
            type="school"
            :grade="8.1"
            :group-size="2"
            status="completed"
          />
        </div>
      </EditorLine>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <h3>Project intentions</h3>
        <section>
          For this school assignment we had to recreate the productivity tool Trello within AWS. The application had
          to have simple authentication and the user should be able to: create boards, create and manage tasks, move
          tasks from one lane to another and add tags to tasks. The main goal of the assignment was to learn the
          deployment process of AWS. We had setup a production and testing environment with CI/CD pipelines.
        </section>
      </EditorLine>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <ImageTextCombinedView
          image-title="Board overview"
          image-description="View all tasks inside of a board."
        >
          <template #text>
            <div>
              <h3>Manage your tasks</h3>
              <section>
                Introducing my Task Manager project, a robust organizational tool designed to streamline
                your workflow and enhance productivity. This intuitive system allows you to create customized
                boards, each tailored to a specific project or aspect of your life.
              </section>
            </div>
          </template>
          <template #image>
            <img
              src="/tas-board.png"
              alt="Tasks inside of a board example"
              class="project-image"
            >
          </template>
        </ImageTextCombinedView>
      </EditorLine>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <ImageTextCombinedView
          image-on-the-left
          image-title="Edit task properties"
          image-description="Edit the title or description, change the column, add or remove tags and assign users to the task."
        >
          <template #text>
            <div>
              <h3>Assign tags and users to tasks</h3>
              <section>
                Seamlessly assign specific tags or users to your tasks, ensuring clarity in responsibilities
                and enhancing team collaboration. With this feature, managing tasks becomes effortless.
                Allowing you to prioritize, track progress and achieve collective goals with precision.
                Stay organized, stay connected, and accomplish tasks effectively with the ability to assign tasks to
                designated tags or users.
              </section>
            </div>
          </template>
          <template #image>
            <img
              src="/tas-edit-task.png"
              alt="Edit task properties"
              class="project-image"
            >
          </template>
        </ImageTextCombinedView>
      </EditorLine>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <h3 class="list-title">
          Features
        </h3>
      </EditorLine>
      <ul class="features-list">
        <EditorLine :indentation="2">
          <li>
            <h4>Create multiple Boards</h4>
            <p>
              Craft multiple boards, each serving as a dedicated space for a project, task category, or team.
              Organize your work efficiently, ensuring a clear overview of your tasks.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h4>Create Task-lists</h4>
            <p>
              Within each board, you can create task-lists representing the different states of your tasks.
              Define custom states such as To-Do, In Progress, and Done. Lanes provide a visual
              representation of your task's progress, making it easy to track their status at a glance.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h4>Task Management</h4>
            <p>
              Populate your lanes with tasks, breaking down your projects into manageable components.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h4>Tags for Task Grouping</h4>
            <p>
              Enhance organization by tagging tasks with relevant keywords or categories. Group tasks
              together, making it effortless to track specific themes or priorities.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h4>Collaborative Environment</h4>
            <p>
              Invite collaborators to your boards, fostering seamless communication and collaboration.
              Assign tasks and work together to achieve common goals.
            </p>
          </li>
        </EditorLine>
      </ul>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <section>
          <h3 class="list-title">
            Used Amazon Web Services
          </h3>
          <ul class="services-list">
            <li>
              <img
                :src="AWSCF"
                alt="AWS Cloudfront icon"
              >
              <p>Cloudfront</p>
            </li>
            <li>
              <img
                :src="AWSALB"
                alt="AWS Load Balancer icon"
              >
              <p>Load Balancer</p>
            </li>
            <li>
              <img
                :src="AWSRDS"
                alt="AWS RDS icon"
              >
              <p>RDS - PostgreSQL</p>
            </li>
            <li>
              <img
                :src="AWSECS"
                alt="AWS ECS icon"
              >
              <p>ECS</p>
            </li>
            <li>
              <img
                :src="AWSECR"
                alt="AWS ECR icon"
              >
              <p>ECR</p>
            </li>
            <li>
              <img
                :src="AWSFargate"
                alt="AWS Fargate icon"
              >
              <p>Fargate</p>
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