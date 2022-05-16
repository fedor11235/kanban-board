import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { reactive, ref, computed } from '@nuxtjs/composition-api'


export const useCardsStore = defineStore('cards', () => {

  const cards = reactive(useLocalStorage('cards', {
    onHold: [
    ],
    inProgress: [
    ],
    needReview: [
    ],
    approved: []
  }))

  const cardsInputText = reactive({
    onHold: { flagAddCard: false, text: '' },
    inProgress: { flagAddCard: false, text: '' },
    needReview: { flagAddCard: false, text: '' },
    approved: { flagAddCard: false, text: '' },
  })

  const setCards = (newValue) => {
    cards.value = newValue
  }

  const getCards = computed(() => cards.value)
  const getCardsInputText = computed(() => cardsInputText)
  const setCardsInputText = computed(() => cardsInputText)


  const setCardsInputTextChangeFlag = (flag, row) => {
    cardsInputText[row].flagAddCard = flag
  }

  function offInputText(row) {
    setCardsInputTextChangeFlag(false, row)
  }

  function onInputText(row) {
    setCardsInputTextChangeFlag(true, row)
  }

  return {
    // cardsInputText,
    cards,
    getCards,
    getCardsInputText,
    setCardsInputText,
    cardsInputText,
    // actionCards,
    offInputText,
    onInputText,
  }
},{ 
  persist:  {
    enabled: true
  }
})
