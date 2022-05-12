/* eslint-disable */
<template>
  <div class="board">
    <div class="lane">
      <h2 class="lane-title">ON HOLD {{cards.onHold.length}}</h2>
      <Container 
        group-name="board" 
        @drag-start="handleDragStart('onHold', $event)" 
        @drop="handleDrop('onHold', $event)"
        :get-child-payload="getChildPayload"
        :drop-placeholder="{ className:'placeholder'}"
      >
        <Draggable v-for="card in cards.onHold" :key="card.id">
          <CardDrop>Card {{card.id}}</CardDrop>
        </Draggable>
      </Container>
    </div>

    <div class="lane">
      <h2 class="lane-title">IN PROGRESS {{cards.inProgress.length}}</h2>
      <Container 
        group-name="board" 
        @drag-start="handleDragStart('inProgress', $event)" 
        @drop="handleDrop('inProgress', $event)"
        :get-child-payload="getChildPayload"
        :drop-placeholder="{ className:'placeholder'}"
      >
        <Draggable v-for="card in cards.inProgress" :key="card.id">
          <CardDrop>Card  {{card.id}}</CardDrop>
        </Draggable>
      </Container>
    </div>

    <div class="lane">
      <h2 class="lane-title">NEED REVIEW {{cards.needReview.length}}</h2>
      <Container 
        group-name="board" 
        @drag-start="handleDragStart('needReview', $event)" 
        @drop="handleDrop('needReview', $event)"
        :get-child-payload="getChildPayload"
        :drop-placeholder="{ className:'placeholder'}"
      >
        <Draggable v-for="card in cards.needReview" :key="card.id">
          <CardDrop>Card  {{card.id}}</CardDrop>
        </Draggable>
      </Container>
    </div>

    <div class="lane">
      <h2 class="lane-title">APPROVED {{cards.approved.length}}</h2>
      <Container 
        group-name="board" 
        @drag-start="handleDragStart('approved', $event)" 
        @drop="handleDrop('approved', $event)"
        :get-child-payload="getChildPayload"
        :drop-placeholder="{ className:'placeholder'}"
      >
        <Draggable v-for="card in cards.approved" :key="card.id">
          <CardDrop>Card  {{card.id}}</CardDrop>
        </Draggable>
      </Container>
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
  }
}
</script>

<style scoped>
  .board {
    display: flex;
    justify-content: center;
    background: green;
    height: 100vh;
  }

  .lane {
    background: white;
    width: 23rem;
    height: 30rem;
    border-radius: 0.8rem;
    box-shadow: 0 0.1rem 0.2rem 0 rgba(33, 33, 33, 0.1);
  }

  .placeholder {
    background: green;
    border-radius: 0.4rem;
  }
</style>
