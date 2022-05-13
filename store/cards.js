import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { reactive, ref } from "@nuxtjs/composition-api"


export const useCardsStore = defineStore('cards', () => {

  const cardsInputText = reactive({
    onHold: { flagAddCard: false, text: '' },
    inProgress: { flagAddCard: false, text: '' },
    needReview: { flagAddCard: false, text: '' },
    approved: { flagAddCard: false, text: '' },
  })

  const cards = reactive(useLocalStorage('cards', {
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
  }))

  return {
    cardsInputText,
    cards,
  }
},{ 
  persist:  {
    enabled: true
  }
})
