<script setup lang="ts">
import EditorLine from "../../components/EditorLine.vue";
import ImageTextCombinedView from "../../components/ImageTextCombinedView.vue";
import ProjectProperties from "../../components/ProjectProperties.vue";
import AWSServiceCard from "../../components/AWSServiceCard.vue";
import TextDocBlock from "../../components/TextDocBlock.vue";
import EditorProject from "./EditorProject.vue";
import Bug from "../../components/Bug.vue";
import {mtgProjectCardData} from "../../data/ProjectCardsData.ts";
</script>

<template>
  <EditorProject>
    <EditorLine :indentation="0" />
    <EditorLine :indentation="0" />
    <EditorLine :indentation="1">
      <h1 id="project-mtg-title"># Project: MTG Cards Collection Manager</h1>
    </EditorLine>

    <EditorLine :indentation="2" />
    <EditorLine :indentation="2">
      <TextDocBlock
        text="
          For this school assignment we had to create an application in which our tutor could manage his own Magic The
          Gathering cards collection. He also wanted the ability to create his own decks from the cards of his
          collection and wishlist cards that he did not yet own.
          "
      />
    </EditorLine>

    <section>
      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <ImageTextCombinedView
          image-title="MTG Card oracle view"
          image-description="View a card's oracle to see all the different releases."
        >
          <template #text>
            <div>
              <h2 id="project-mtg-oracle">## View a card's oracle to see all the different releases</h2>
              <p>
                See all the information of a card on the oracle page. In this page you can see the abilities, costs,
                rules and the releases of a card.
              </p>
            </div>
          </template>
          <template #image>
            <img
              src="/img/projects/mtg-oracle-overview.png"
              alt="MTG oracle overview"
              class="project-image"
            >
          </template>
        </ImageTextCombinedView>
      </EditorLine>
    </section>

    <section>
      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <ImageTextCombinedView
          image-title="MTG Card view"
          image-description="View a specific card."
          image-on-the-left
        >
          <template #text>
            <div>
              <h2 id="project-mtg-card">## View a specific card</h2>
              <p>
                See the information of a specific card. In this page you can see the abilities, costs and rules of that
                specific card. Beware that the rules may have changed with a later release of the card, always check
                the oracle for potential changes.
              </p>
            </div>
          </template>
          <template #image>
            <Bug :bug-type="13">
              <img
                src="/img/projects/mtg-card-overview.png"
                alt="MTG card overview"
                class="project-image"
              >
            </Bug>
          </template>
        </ImageTextCombinedView>
      </EditorLine>
    </section>

    <section>
      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <h2 id="project-mtg-features" class="list-title">
          ## Features
        </h2>
      </EditorLine>
      <ul class="features-list">
        <EditorLine :indentation="2">
          <li>
            <h3 id="project-mtg-collection">Manage your Collection</h3>
            <p>
              Add cards from your physical collection and quickly search for specific cards.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h3 id="project-mtg-decks">Create playable decks</h3>
            <p>
              Add cards from your collection to a specific deck and check if the deck is valid for the commander game
              mode.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h3 id="project-mtg-wishlist">Add cards to wishlist</h3>
            <p>
              If you need a specific card to complete a deck, then you can add that card to your wishlist and finish
              the deck that you are building.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h3 id="project-mtg-price">Check the price of certain cards</h3>
            <p>
              The price of all the cards in our database is updated every single day. With this you can easily check
              if there is a discounted price on a certain card trading website.
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
      <ProjectProperties v-bind="mtgProjectCardData"/>
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
          <AWSServiceCard name="EventBridge" />
        </li>
        <li>
          <AWSServiceCard name="CloudWatch" />
        </li>
        <li>
          <AWSServiceCard name="SSM" />
        </li>
        <li>
          <AWSServiceCard name="Cognito" />
        </li>
        <li>
          <AWSServiceCard name="IAM" />
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
