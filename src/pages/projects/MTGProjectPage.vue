<script setup lang="ts">
import Editor from "../../components/Editor.vue";
import EditorLine from "../../components/EditorLine.vue";
import ImageTextCombinedView from "../../components/ImageTextCombinedView.vue";
import "./ProjectPage.css";
import ProjectProperties from "../../components/ProjectProperties.vue";
import AWSServiceCard from "../../components/AWSServiceCard.vue";
</script>

<template>
  <div class="project-page">
    <Editor>
      <EditorLine :indentation="0" />
      <EditorLine :indentation="0" />
      <EditorLine :indentation="1">
        <h2>Project: MTG Cards Collection Manager</h2>
      </EditorLine>
      <EditorLine :indentation="1">
        <div class="tags-wrapper">
          <ProjectProperties
            :languages="['python', 'scala', 'typescript', 'html', 'sass']"
            :frameworks="['sam', 'vue', 'cypress']"
            :integrations="['scryfall']"
            database="dynamodb"
            deployment="aws"
            type="school"
            :grade="7.7"
            :group-size="6"
            status="completed"
          />
        </div>
      </EditorLine>

      <section>
        <EditorLine :indentation="2" />
        <EditorLine :indentation="2">
          <h3 class="text-only-section">
            Project intentions
          </h3>
        </EditorLine>
        <EditorLine :indentation="2">
          <p class="text-only-section">
            For this school assignment we had to create an application in which our tutor could manage his own Magic The
            Gathering cards collection. He also wanted the ability to create his own decks from the cards of his
            collection and wishlist cards that he did not yet own.
          </p>
        </EditorLine>
      </section>

      <section>
        <EditorLine :indentation="2" />
        <EditorLine :indentation="2">
          <ImageTextCombinedView
            image-title="MTG Card oracle view"
            image-description="View a card's oracle to see all the different releases."
          >
            <template #text>
              <div>
                <h3>View a card's oracle to see all the different releases</h3>
                <p>
                  See all the information of a card on the oracle page. In this page you can see the abilities, costs,
                  rules and the releases of a card.
                </p>
              </div>
            </template>
            <template #image>
              <img
                src="/mtg-oracle-overview.png"
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
                <h3>View a specific card</h3>
                <p>
                  See the information of a specific card. In this page you can see the abilities, costs and rules of that
                  specific card. Beware that the rules may have changed with a later release of the card, always check
                  the oracle for potential changes.
                </p>
              </div>
            </template>
            <template #image>
              <img
                src="/mtg-card-overview.png"
                alt="MTG card overview"
                class="project-image"
              >
            </template>
          </ImageTextCombinedView>
        </EditorLine>
      </section>

      <section>
        <EditorLine :indentation="2" />
        <EditorLine :indentation="2">
          <h3 class="list-title">
            Features
          </h3>
        </EditorLine>
        <ul class="features-list">
          <EditorLine :indentation="2">
            <li>
              <h4>Manage your Collection</h4>
              <p>
                Add cards from your physical collection and quickly search for specific cards.
              </p>
            </li>
          </EditorLine>
          <EditorLine :indentation="2">
            <li>
              <h4>Create playable decks</h4>
              <p>
                Add cards from your collection to a specific deck and check if the deck is valid for the commander game
                mode.
              </p>
            </li>
          </EditorLine>
          <EditorLine :indentation="2">
            <li>
              <h4>Add cards to wishlist</h4>
              <p>
                If you need a specific card to complete a deck, then you can add that card to your wishlist and finish
                the deck that you are building.
              </p>
            </li>
          </EditorLine>
          <EditorLine :indentation="2">
            <li>
              <h4>Check the price of certain cards</h4>
              <p>
                The price of all the cards in our database is updated every single day. With this you can easily check
                if there is a discounted price on a certain card trading website.
              </p>
            </li>
          </EditorLine>
        </ul>
      </section>

      <section>
        <EditorLine :indentation="2" />
        <EditorLine :indentation="2">
          <h3 class="list-title">
            Used Amazon Web Services
          </h3>
        </EditorLine>
        <EditorLine :indentation="2">
          <ul class="services-list">
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
              <AWSServiceCard name="AWSCognito" />
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
        </EditorLine>
      </section>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="1" />
      <EditorLine :indentation="0" />
      <EditorLine :indentation="0" />
    </Editor>
  </div>
</template>

<style scoped>

</style>