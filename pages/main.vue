<template>
  <div class='main'>
    <div class='header'>
      <button class='exit' @click.prevent='exit()'>Выход</button>
    </div>
    <div class='board'>
      <div class='lane'>
        <h2 class='lane-title lane-on-holder'>
          ON HOLD ({{ cardsStore.getCards.onHold.length }})
        </h2>
        <Container
          group-name='board'
          @drag-start="handleDragStart('onHold', $event)"
          @drop="handleDrop('onHold', $event)"
          :get-child-payload='getChildPayload'
        >
          <Draggable v-for='card in cardsStore.getCards.onHold' :key='card.id'>
            <CardDrop>
              <div class='containerDeleteCard'>
                <div
                  class='deleteCard'
                  @click.prevent="deleteCard('onHold', card.id)"
                ></div>
              </div>
              <div class='containerTextCard'>
                <p class='textCard'>
                  <span class='idCard'>id</span>: {{ card.id }}
                </p>
                <p class='textCard'>{{ card.text }}</p>
              </div>
            </CardDrop>
          </Draggable>
        </Container>
        <div
          v-show='cardsStore.getCardsInputText.onHold.flagAddCard'
          class='containerAddTextCard'
        >
          <textarea
            v-model='cardsStore.setCardsInputText.onHold.text'
            class='addTextCard'
            placeholder='Ввести заголовок для этой карточки'
          ></textarea>
        </div>
        <div
          v-show='!cardsStore.getCardsInputText.onHold.flagAddCard'
          class='addCard'
          @click.prevent='cardsStore.onInputText("onHold")'
        >
          <span class='plus'>+</span>Добавить карточку
        </div>
        <div
          v-show='cardsStore.getCardsInputText.onHold.flagAddCard'
          class='addCardContainer'
        >
          <span class='addCardApprov' @click.prevent="addCard('onHold')">Добавить карточку</span> 
          <span>
            <span @click.prevent='cardsStore.offInputText("onHold")' class='deleteApprovCard'></span>
          </span>
        </div>
      </div>

      <div class='lane'>
        <h2 class='lane-title lane-in-progress'>
          IN PROGRESS ({{ cardsStore.getCards.inProgress.length }})
        </h2>
        <Container
          group-name='board'
          @drag-start="handleDragStart('inProgress', $event)"
          @drop="handleDrop('inProgress', $event)"
          :get-child-payload='getChildPayload'
        >
          <Draggable v-for='card in cardsStore.getCards.inProgress' :key='card.id'>
            <CardDrop>
              <div class='containerDeleteCard'>
                <div
                  class='deleteCard'
                  @click.prevent="deleteCard('inProgress', card.id)"
                ></div>
              </div>
              <div class='containerTextCard'>
                <p class='textCard'>
                  <span class='idCard'>id</span>: {{ card.id }}
                </p>
                <p class='textCard'>{{ card.text }}</p>
              </div>
            </CardDrop>
          </Draggable>
        </Container>

        <div
          v-show='cardsStore.getCardsInputText.inProgress.flagAddCard'
          class='containerAddTextCard'
        >
          <textarea
            v-model='cardsStore.setCardsInputText.inProgress.text'
            class='addTextCard'
            placeholder='Ввести заголовок для этой карточки'
          ></textarea>
        </div>
        <div
          v-show='!cardsStore.getCardsInputText.inProgress.flagAddCard'
          class='addCard'
          @click.prevent='cardsStore.onInputText("inProgress")'
        >
          <span class='plus'>+</span>Добавить карточку
        </div>
        <div
          v-show='cardsStore.getCardsInputText.inProgress.flagAddCard'
          class='addCardContainer'
        >
          <span class='addCardApprov' @click.prevent="addCard('inProgress')">Добавить карточку</span> 
          <span>
            <span @click.prevent='cardsStore.offInputText("inProgress")' class='deleteApprovCard'></span>
          </span>
        </div>
      </div>

      <div class='lane'>
        <h2 class='lane-title need-review'>
          NEED REVIEW ({{ cardsStore.getCards.needReview.length }})
        </h2>
        <Container
          group-name='board'
          @drag-start="handleDragStart('needReview', $event)"
          @drop="handleDrop('needReview', $event)"
          :get-child-payload='getChildPayload'
        >
          <Draggable v-for='card in cardsStore.getCards.needReview' :key='card.id'>
            <CardDrop>
              <div class='containerDeleteCard'>
                <div
                  class='deleteCard'
                  @click.prevent="deleteCard('needReview', card.id)"
                ></div>
              </div>
              <div class='containerTextCard'>
                <p class='textCard'>
                  <span class='idCard'>id</span>: {{ card.id }}
                </p>
                <p class='textCard'>{{ card.text }}</p>
              </div>
            </CardDrop>
          </Draggable>
        </Container>
        <div
          v-show='cardsStore.getCardsInputText.needReview.flagAddCard'
          class='containerAddTextCard'
        >
          <textarea
            v-model='cardsStore.setCardsInputText.needReview.text'
            class='addTextCard'
            placeholder='Ввести заголовок для этой карточки'
          ></textarea>
        </div>
        <div
          v-show='!cardsStore.getCardsInputText.needReview.flagAddCard'
          class='addCard'
          @click.prevent='cardsStore.onInputText("needReview")'
        >
          <span class='plus'>+</span>Добавить карточку
        </div>
        <div
          v-show='cardsStore.getCardsInputText.needReview.flagAddCard'
          class='addCardContainer'
        >
          <span class='addCardApprov' @click.prevent="addCard('needReview')">Добавить карточку</span> 
          <span>
            <span @click.prevent='cardsStore.offInputText("needReview")' class='deleteApprovCard'></span>
          </span>
        </div>
      </div>

      <div class='lane'>
        <h2 class='lane-title lane-approved'>
          APPROVED ({{ cardsStore.getCards.approved.length }})
        </h2>
        <Container
          group-name='board'
          @drag-start="handleDragStart('approved', $event)"
          @drop="handleDrop('approved', $event)"
          :get-child-payload='getChildPayload'
        >
          <Draggable v-for='card in cardsStore.getCards.approved' :key='card.id'>
            <CardDrop>
              <div class='containerDeleteCard'>
                <div
                  class='deleteCard'
                  @click.prevent="deleteCard('approved', card.id)"
                ></div>
              </div>
              <div class='containerTextCard'>
                <p class='textCard'>
                  <span class='idCard'>id</span>: {{ card.id }}
                </p>
                <p class='textCard'>{{ card.text }}</p>
              </div>
            </CardDrop>
          </Draggable>
        </Container>
        <div
          v-show='cardsStore.getCardsInputText.approved.flagAddCard'
          class='containerAddTextCard'
        >
          <textarea
            v-model='cardsStore.setCardsInputText.approved.text'
            class='addTextCard'
            placeholder='Ввести заголовок для этой карточки'
          ></textarea>
        </div>
        <div
          v-show='!cardsStore.getCardsInputText.approved.flagAddCard'
          class='addCard'
          @click.prevent='cardsStore.onInputText("needReview")'
        >
          <span class='plus'>+</span>Добавить карточку
        </div>
        <div
          v-show='cardsStore.getCardsInputText.approved.flagAddCard'
          class='addCardContainer'
        >
          <span class='addCardApprov' @click.prevent="addCard('approved')">Добавить карточку</span> 
          <span>
            <span @click.prevent='cardsStore.offInputText("approved")' class='deleteApprovCard'></span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd';
import { useCardsStore } from '@/store/cards';
import { useUserStore } from '@/store/user';
import { reactive, useRouter } from '@nuxtjs/composition-api';

export default {
  name: 'MainPage',
  layout: 'privateMain',

  components: {
    Container,
    Draggable,
  },

  setup() {
    const cardsStore = useCardsStore();
    const { setUser } = useUserStore();
    const router = useRouter();

    let draggingCard = reactive({
      line: '',
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
            ...cardsStore.getCards[lane][payload.index],
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
        cardsStore.removeCardsOwnRow(lane, removedIndex)
      }
      if (addedIndex !== null) {
        cardsStore.movingToAnother(lane, addedIndex, draggingCard)
      }
    }

    function getChildPayload(index) {
      return {
        index,
      };
    }

    function deleteCard(lane, idCard) {
      cardsStore.removeCard(lane, idCard)
    }

    function addCard(lane) {
      cardsStore.offInputText(lane);
      if(cardsStore.getCardsInputText[lane].text===''){
        alert('Вы не ввели текст')
        return
      }
      cardsStore.addCard(lane)
    }

    function exit(){
      router.push( '/' );
      setUser ({
        username:'',
        email: '',
        token: '',
      })
    }
    

    return {
      cardsStore,
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
  cursor:pointer;
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
  position: absolute;
  display: inline-block;
}
.deleteCard:hover {
  opacity: 1;
}
.deleteCard:before, .deleteCard:after {
  position: absolute;
  cursor: pointer;
  left: -0.5rem;
  content: ' ';
  height: 1rem;
  width: 2px;
  background-color: #333;
}
.deleteCard:before {
  transform: rotate(45deg);
}
.deleteCard:after {
  transform: rotate(-45deg);
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
  display: flex;
  width: 100%;
  cursor: pointer;
  height: 3rem;
  align-items: center;
  background: #303038;
  color: #64646c;
  border: 0;
}

.addCardContainer{
  display: flex;
  width: 100%;
  height: 4rem;
  align-items: center;
  background: #303038;
  color: #64646c;
  border: 0;
}

.addCardApprov {
  display: flex;
  align-items: center;
  cursor: pointer;
  background: #616062;
  color: #dad7d9;
  height: 2rem;
  margin-left: 1rem;
  text-align: center;
  padding: 0 1rem;
}

.addCardApprov:hover {
  background: #515051;
}

.addCardApprov:active {
  background: #616062;
}
.deleteApprovCard {
  height: 1rem;
  position: absolute;
  display: block;
}

.deleteApprovCard:before, .deleteApprovCard:after {
  position: absolute;
  cursor: pointer;
  left: 2rem;
  bottom: 0.3rem;
  content: ' ';
  height: 1.3rem;
  width: 2px;
  background-color: #95969e;
}
.deleteApprovCard:before {
  transform: rotate(45deg);
}
.deleteApprovCard:after {
  transform: rotate(-45deg);
}

.addCard:hover {
  background: #27272d;
}

.plus {
  margin:1rem;
  font-size: 2.5rem;
}
</style>
