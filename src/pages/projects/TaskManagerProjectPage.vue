<script setup lang="ts">
import Editor from "../../components/Editor.vue";
import EditorLine from "../../components/EditorLine.vue";
import ImageTextCombinedView from "../../components/ImageTextCombinedView.vue";
import "./ProjectPage.css";
import ProjectProperties from "../../components/ProjectProperties.vue";
import ArchitectureAmazonS3 from 'aws-icons/icons/ArchitectureAmazonSimpleStorageService.svg';
import ArchitectureAmazonCF from 'aws-icons/icons/ArchitectureAmazonCloudFront.svg';
import ArchitectureAmazonECS from 'aws-icons/icons/ArchitectureAmazonElasticContainerService.svg';
import ArchitectureAmazonECR from 'aws-icons/icons/ArchitectureAmazonElasticContainerRegistry.svg';
import ArchitectureAmazonRDS from 'aws-icons/icons/ArchitectureAmazonRDS.svg';
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
            status="completed"
            :links="[]"
          />
        </div>
      </EditorLine>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <ImageTextCombinedView>
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
        <ImageTextCombinedView image-on-the-left>
          <template #text>
            <div>
              <h3>Assign tags and users to tasks</h3>
              <section>
                Seamlessly assign specific tags or users to your tasks, ensuring clarity in responsibilities
                and enhancing team collaboration. With this feature, managing tasks becomes effortless.
                Allowing you to prioritize, track progress and achieve collective goals with precision.
                Stay organized, stay connected, and accomplish tasks effectively with the ability to assign tasks to designated tags or users.
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
        <section>
          <h3 class="list-title">
            Features
          </h3>
          <ul>
            <li>
              <h4>Create multiple Boards</h4>
              <p>
                Craft multiple boards, each serving as a dedicated space for a project, task category, or team.
                Organize your work efficiently, ensuring a clear overview of your tasks.
              </p>
            </li>
            <li>
              <h4>Create Task-lists</h4>
              <p>
                Within each board, you can create task-lists representing the different states of your tasks.
                Define custom states such as To-Do, In Progress, and Done. Lanes provide a visual
                representation of your task's progress, making it easy to track their status at a glance.
              </p>
            </li>
            <li>
              <h4>Task Management</h4>
              <p>
                Populate your lanes with tasks, breaking down your projects into manageable components.
              </p>
            </li>
            <li>
              <h4>Tags for Task Grouping</h4>
              <p>
                Enhance organization by tagging tasks with relevant keywords or categories. Group tasks
                together, making it effortless to track specific themes or priorities.
              </p>
            </li>
            <li>
              <h4>Collaborative Environment</h4>
              <p>
                Invite collaborators to your boards, fostering seamless communication and collaboration.
                Assign tasks and work together to achieve common goals.
              </p>
            </li>
          </ul>
        </section>
      </EditorLine>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <section>
          <h3 class="list-title">
            Amazon Web Services
          </h3>
          <ul class="services-list">
            <li>
              <img :src="ArchitectureAmazonCF" alt="AWS Cloudfront service icon">
              <p>Cloudfront</p>
            </li>
            <li>
              <img :src="ArchitectureAmazonECS" alt="AWS ECS service icon">
              <p>ECS</p>
            </li>
            <li>
              <img :src="ArchitectureAmazonECR" alt="AWS ECR service icon">
              <p>ECR</p>
            </li>
            <li>
              <img :src="ArchitectureAmazonS3" alt="AWS S3 service icon">
              <p>S3</p>
            </li>
            <li>
              <img :src="ArchitectureAmazonRDS" alt="AWS RDS service icon">
              <p>RDS - PostgreSQL</p>
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