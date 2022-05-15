<template>
  <div class="main">
    <div class="header">
      <button class="exit" @click.prevent="exit()">Выход</button>
    </div>
    <div class="board">
      <div class="lane">
        <h2 class="lane-title lane-on-holder">
          ON HOLD {{ store.cards.onHold.length }}
        </h2>
        <Container
          group-name="board"
          @drag-start="handleDragStart('onHold', $event)"
          @drop="handleDrop('onHold', $event)"
          :get-child-payload="getChildPayload"
        >
          <Draggable v-for="card in store.cards.onHold" :key="card.id">
            <CardDrop>
              <div class="containerDeleteCard">
                <div
                  class="deleteCard"
                  @click.prevent="deleteCard('onHold', card.id)"
                ></div>
              </div>
              <div class="containerTextCard">
                <p class="textCard">
                  <span class="idCard">id</span>: {{ card.id }}
                </p>
                <p class="textCard">{{ card.text }}</p>
              </div>
            </CardDrop>
          </Draggable>
        </Container>
        <div
          v-show="store.cardsInputText.onHold.flagAddCard"
          class="containerAddTextCard"
        >
          <textarea
            v-model="store.cardsInputText.onHold.text"
            class="addTextCard"
            placeholder="Ввести заголовок для этой карточки"
          ></textarea>
        </div>
        <button
          v-show="!store.cardsInputText.onHold.flagAddCard"
          class="addCard"
          @click.prevent="store.cardsInputText.onHold.flagAddCard = true"
        >
          + Добавить карточку
        </button>
        <button
          v-show="store.cardsInputText.onHold.flagAddCard"
          class="addCard"
          @click.prevent="addCard('onHold')"
        >
          + Точно Добавить карточку
        </button>
      </div>

      <div class="lane">
        <h2 class="lane-title lane-in-progress">
          IN PROGRESS {{ store.cards.inProgress.length }}
        </h2>
        <Container
          group-name="board"
          @drag-start="handleDragStart('inProgress', $event)"
          @drop="handleDrop('inProgress', $event)"
          :get-child-payload="getChildPayload"
        >
          <Draggable v-for="card in store.cards.inProgress" :key="card.id">
            <CardDrop>
              <div class="containerDeleteCard">
                <div
                  class="deleteCard"
                  @click.prevent="deleteCard('inProgress', card.id)"
                ></div>
              </div>
              <div class="containerTextCard">
                <p class="textCard">
                  <span class="idCard">id</span>: {{ card.id }}
                </p>
                <p class="textCard">{{ card.text }}</p>
              </div>
            </CardDrop>
          </Draggable>
        </Container>

        <div
          v-show="store.cardsInputText.inProgress.flagAddCard"
          class="containerAddTextCard"
        >
          <textarea
            v-model="store.cardsInputText.inProgress.text"
            class="addTextCard"
            placeholder="Ввести заголовок для этой карточки"
          ></textarea>
        </div>
        <button
          v-show="!store.cardsInputText.inProgress.flagAddCard"
          class="addCard"
          @click.prevent="store.cardsInputText.inProgress.flagAddCard = true"
        >
          + Добавить карточку
        </button>
        <button
          v-show="store.cardsInputText.inProgress.flagAddCard"
          class="addCard"
          @click.prevent="addCard('inProgress')"
        >
          + Точно Добавить карточку
        </button>
      </div>

      <div class="lane">
        <h2 class="lane-title need-review">
          NEED REVIEW {{ store.cards.needReview.length }}
        </h2>
        <Container
          group-name="board"
          @drag-start="handleDragStart('needReview', $event)"
          @drop="handleDrop('needReview', $event)"
          :get-child-payload="getChildPayload"
        >
          <Draggable v-for="card in store.cards.needReview" :key="card.id">
            <CardDrop>
              <div class="containerDeleteCard">
                <div
                  class="deleteCard"
                  @click.prevent="deleteCard('needReview', card.id)"
                ></div>
              </div>
              <div class="containerTextCard">
                <p class="textCard">
                  <span class="idCard">id</span>: {{ card.id }}
                </p>
                <p class="textCard">{{ card.text }}</p>
              </div>
            </CardDrop>
          </Draggable>
        </Container>
        <div
          v-show="store.cardsInputText.needReview.flagAddCard"
          class="containerAddTextCard"
        >
          <textarea
            v-model="store.cardsInputText.needReview.text"
            class="addTextCard"
            placeholder="Ввести заголовок для этой карточки"
          ></textarea>
        </div>
        <button
          v-show="!store.cardsInputText.needReview.flagAddCard"
          class="addCard"
          @click.prevent="store.cardsInputText.needReview.flagAddCard = true"
        >
          + Добавить карточку
        </button>
        <button
          v-show="store.cardsInputText.needReview.flagAddCard"
          class="addCard"
          @click.prevent="addCard('needReview')"
        >
          + Точно Добавить карточку
        </button>
      </div>

      <div class="lane">
        <h2 class="lane-title lane-approved">
          APPROVED {{ store.cards.approved.length }}
        </h2>
        <Container
          group-name="board"
          @drag-start="handleDragStart('approved', $event)"
          @drop="handleDrop('approved', $event)"
          :get-child-payload="getChildPayload"
        >
          <Draggable v-for="card in store.cards.approved" :key="card.id">
            <CardDrop>
              <div class="containerDeleteCard">
                <div
                  class="deleteCard"
                  @click.prevent="deleteCard('approved', card.id)"
                ></div>
              </div>
              <div class="containerTextCard">
                <p class="textCard">
                  <span class="idCard">id</span>: {{ card.id }}
                </p>
                <p class="textCard">{{ card.text }}</p>
              </div>
            </CardDrop>
          </Draggable>
        </Container>
        <div
          v-show="store.cardsInputText.approved.flagAddCard"
          class="containerAddTextCard"
        >
          <textarea
            v-model="store.cardsInputText.approved.text"
            class="addTextCard"
            placeholder="Ввести заголовок для этой карточки"
          ></textarea>
        </div>
        <button
          v-show="!store.cardsInputText.approved.flagAddCard"
          class="addCard"
          @click.prevent="store.cardsInputText.approved.flagAddCard = true"
        >
          + Добавить карточку
        </button>
        <button
          v-show="store.cardsInputText.approved.flagAddCard"
          class="addCard"
          @click.prevent="addCard('approved')"
        >
          + Точно Добавить карточку
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Container, Draggable } from "vue-smooth-dnd";
import { useCardsStore } from "@/store/cards";
import { useUserStore } from "@/store/user";
import { reactive } from "@nuxtjs/composition-api";
import apiCards from "@/api/cards";

export default {
  name: "MainPage",
  layout: "privateMain",

  components: {
    Container,
    Draggable,
  },

  setup() {
    const store = useCardsStore();
    const user = useUserStore();

    let draggingCard = reactive({
      line: "",
      index: -1,
      cardData: {},
    });

    function handleDragStart(lane, dragResult) {
      const { payload, isSource } = dragResult;
      if (isSource) {
        draggingCard = {
          lane,
          index: payload.index,
          cardData: {
            ...store.cards[lane][payload.index],
          },
        };
      }
    }

    function handleDrop(lane, dropResult) {
      const { removedIndex, addedIndex } = dropResult;
      if (lane === draggingCard.line && removedIndex === addedIndex) {
        return;
      }
      if (removedIndex !== null) {
        store.cards[lane].splice(removedIndex, 1);
        store.cards[lane].forEach((element, index) => {
          const row = converterLaneToRow(lane);
          element.row = row;
          element.seq_num = index;
          (async () => await apiCards.updateCard(this.$axios, element))();
        });
      }
      if (addedIndex !== null) {
        store.cards[lane].splice(addedIndex, 0, draggingCard.cardData);
        store.cards[lane].forEach((element, index) => {
          const row = converterLaneToRow(lane);
          element.row = converterLaneToRow(lane);
          element.seq_num = index;
          (async () => await apiCards.updateCard(this.$axios, element))();
        });
      }
    }

    function getChildPayload(index) {
      return {
        index,
      };
    }

    function deleteCard(lane, idCard) {
      store.cards[lane] = store.cards[lane].filter(
        (elem) => elem.id !== idCard
      );
      apiCards.deleteCard(this.$axios, idCard);
    }

    async function addCard(lane) {
      store.cardsInputText[lane].flagAddCard = false;
      const row = converterLaneToRow(lane);
      const newCard = await apiCards.createCard(this.$axios, {
        row,
        text: store.cardsInputText[lane].text,
      });
      store.cards[lane].push({
        id: newCard.data.id,
        text: store.cardsInputText[lane].text,
      });
      store.cardsInputText[lane].text = "";
    }

    function converterLaneToRow(lane) {
      switch (lane) {
        case "onHold":
          return "0";
        case "inProgress":
          return "1";
        case "needReview":
          return "2";
        case "approved":
          return "3";
      }
    }

    function exit(){
      this.$router.replace({ path: "/" });
      user.user = {
        username:'',
        email: '',
        token: '',
      }
    }

    return {
      store,
      draggingCard,
      handleDragStart,
      handleDrop,
      getChildPayload,
      deleteCard,
      addCard,
      exit
    };
  },
};
</script>

<style scoped>
.main{
  background: #383a42;
}

.header {
  display: flex;
  height: 3rem;
  padding: 0 3rem;
  background: #1f1f23;
  justify-content: flex-end;
  align-items: center;
}

.exit {
  height: 3rem;
  width: 6rem;
  background: #be3c51;
  color: white;
  border:0;
  outline:none;
}
.board {
  display: flex;
  padding-top: 5rem;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 100vh;
}

.lane-title {
  padding: 1rem;
  color: white;
  margin: 0;
}

.lane {
  background: #303038;
  width: 23rem;
}

.lane-on-holder {
  background: #f88b4a;
}
.lane-in-progress {
  background: #3c8bbe;
}
.need-review {
  background: #f5c852;
}
.lane-approved {
  background: #4ca468;
}

.deleteCard {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #545558;
}

.containerDeleteCard {
  text-align: right;
  padding: 0.5rem;
}

.containerTextCard {
  padding: 0 1.4rem 1.4rem;
}

.idCard {
  color: #dad7d9;
}

.textCard {
  color: #5a5f6b;
}

.containerAddTextCard {
  margin: 1rem 1rem 0;
}

.addTextCard {
  background: #515051;
  color: #dad7d9;
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
  border: 0;
  resize: none;
  outline: none;
}

.addTextCard:placeholder {
  color: #717072;
}

.addCard {
  width: 100%;
  padding: 1rem;
  background: #303038;
  color: #64646c;
  border: 0;
}

.addCard:hover {
  background: #27272d;
}
</style>
