import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { reactive, ref } from '@nuxtjs/composition-api'


export const useCardsStore = defineStore('cards', () => {

  const cardsInputText = reactive({
    onHold: { flagAddCard: false, text: '' },
    inProgress: { flagAddCard: false, text: '' },
    needReview: { flagAddCard: false, text: '' },
    approved: { flagAddCard: false, text: '' },
  })

  const cards = reactive(useLocalStorage('cards', {
    onHold: [
    ],
    inProgress: [
    ],
    needReview: [
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
