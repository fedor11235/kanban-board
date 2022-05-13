import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
// cards: JSON.parse(localStorage.getItem("cards")),
export const useCardsStore = defineStore({
  id: 'cards',

  state: () => ({
    cardsInputText: {
      onHold: {flagAddCard:false, text:''},
      inProgress: {flagAddCard:false, text:''},
      needReview: {flagAddCard:false, text:''},
      approved: {flagAddCard:false, text:''},
    },
    // draggingCard: {
    //   line: '', 
    //   index: -1,
    //   cardData: {}
    // },
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
      approved: []
    },
  }),
  // watch:{
  //       store() {
  //     localStorage.setItem("cards", JSON.stringify(store.getCards))
  //   }
  // },

  getters: {
    getCards: state => state.cards,
    getCardsInputText: state => state.cardsInputText
  },

  // actions: {
  //   setNewValue(newValue) {
  //     this.value = newValue
  //   }
  // }
})

// state: () => ({
//   cards: () => {
//     if (localStorage.getItem("cards")) {
//       return JSON.parse(localStorage.getItem("cards"))
//     } else {
//       return {
//         onHold: [
//           { id: 1, text: 'exeple1' },
//           { id: 2, text: 'exeple2' },
//           { id: 3, text: 'exeple3' }
//         ],
//         inProgress: [
//           { id: 4, text: 'exeple4' },
//           { id: 5, text: 'exeple5' }
//         ],
//         needReview: [
//           { id: 6, text: 'exeple6' }
//         ],
//         approved: []
//       }
//     }
//   }