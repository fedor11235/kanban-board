/* eslint-disable */
<template>
  <div class="board">
    <div class="lane">
      <h2 class="lane-title lane-on-holder">ON HOLD {{cards.onHold.length}}</h2>
      <Container 
        group-name="board" 
        @drag-start="handleDragStart('onHold', $event)" 
        @drop="handleDrop('onHold', $event)"
        :get-child-payload="getChildPayload"
      >
        <Draggable v-for="card in cards.onHold" :key="card.id">
          <CardDrop>
            <p class="textCard"><span class="idCard">id</span>: {{card.id}}</p>
            <p class="textCard">{{card.text}}</p>
          </CardDrop>
        </Draggable>
      </Container>
      <button class="addCard" @click="addCard('onHold')">+ Добавить карточку</button>
    </div>

    <div class="lane">
      <h2 class="lane-title lane-in-progress">IN PROGRESS {{cards.inProgress.length}}</h2>
      <Container 
        group-name="board" 
        @drag-start="handleDragStart('inProgress', $event)" 
        @drop="handleDrop('inProgress', $event)"
        :get-child-payload="getChildPayload"
      >
        <Draggable v-for="card in cards.inProgress" :key="card.id">
          <CardDrop>
            <p class="textCard"><span class="idCard">id</span>: {{card.id}}</p>
            <p class="textCard">{{card.text}}</p>
          </CardDrop>
        </Draggable>
      </Container>
      <button class="addCard" @click="addCard('inProgress')">+ Добавить карточку</button>
    </div>

    <div class="lane">
      <h2 class="lane-title need-review">NEED REVIEW {{cards.needReview.length}}</h2>
      <Container 
        group-name="board" 
        @drag-start="handleDragStart('needReview', $event)" 
        @drop="handleDrop('needReview', $event)"
        :get-child-payload="getChildPayload"
      >
        <Draggable v-for="card in cards.needReview" :key="card.id">
          <CardDrop>
            <p class="textCard"><span class="idCard">id</span>: {{card.id}}</p>
            <p class="textCard">{{card.text}}</p>
          </CardDrop>
        </Draggable>
      </Container>
      <button class="addCard" @click="addCard('needReview')">+ Добавить карточку</button>
    </div>

    <div class="lane">
      <h2 class="lane-title lane-approved">APPROVED {{cards.approved.length}}</h2>
      <Container 
        group-name="board" 
        @drag-start="handleDragStart('approved', $event)" 
        @drop="handleDrop('approved', $event)"
        :get-child-payload="getChildPayload"
      >
        <Draggable v-for="card in cards.approved" :key="card.id">
          <CardDrop>
            <p class="textCard"><span class="idCard">id</span>: {{card.id}}</p>
            <p class="textCard">{{card.text}}</p>
          </CardDrop>
        </Draggable>
      </Container>
      <button class="addCard" @click="addCard('approved')">+ Добавить карточку</button>
    </div>

  </div>
</template>

<script>
import { Container, Draggable } from "vue-smooth-dnd"
export default {
  name: 'IndexPage',
  components: {
    Container,
    Draggable
  },
  data: () => ({
    cards: {
      onHold: [
        { id: 1, text: 'exeple1' },
        { id: 2, text: 'exeple2' },
        { id: 3, text: 'exeple3' }
      ],
      inProgress: [
        { id: 4, text: 'exeple4' },
        { id: 5, text: 'exeple5' }
      ],
      needReview: [
        { id: 6, text: 'exeple6' }
      ],
      approved: [
        
      ]
    },
    draggingCard: {
      line: '', 
      index: -1,
      cardData: {}
    }
  }),
  methods:{
    handleDragStart(lane, dragResult) {
      const { payload, isSource } = dragResult
      if(isSource) {
        this.draggingCard = {
          lane,
          index: payload.index,
          cardData: {
            ...this.cards[lane][payload.index]
          }
        }
      }
      console.log(payload.index)
    },
    handleDrop(lane, dropResult) {
      const { removedIndex, addedIndex} = dropResult
      console.log(lane,removedIndex, addedIndex)
      if(lane===this.draggingCard.line && removedIndex === addedIndex) {
        return
      }
      if(removedIndex !== null) {
        this.cards[lane].splice(removedIndex, 1)
      }
      if(addedIndex !== null) {
        this.cards[lane].splice(addedIndex, 0, this.draggingCard.cardData)
      }
    },
    getChildPayload(index) {
      return {
        index
      }
    },
    addCard(line){
      this.cards[line].push({ id: Math.random().toString().substring(5), text: 'exeple1' })
    }
  }
}
</script>

<style scoped>
  .board {
    display: flex;
    padding-top:5rem;
    justify-content: space-around;
    align-items: flex-start;
    background: #383a42;
    height: 100vh;
  }

  .lane-title {
    padding:1rem;
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

  .idCard {
    color: #dad7d9;
  }

  .textCard {
    color: #5a5f6b;
  }

  .addCard{
    width: 100%;
    padding:1rem;
    background: #303038;
    color: #64646c;
    border: 0;
  }
</style>
