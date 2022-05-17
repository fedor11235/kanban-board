import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { reactive, ref, computed } from '@nuxtjs/composition-api'
import { apiCards } from '@/api/cards';

export const useCardsStore = defineStore('cards', () => {

  const { updateCard, createCard, deleteCard } = apiCards()

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

  function removeCard(lane, idCard){
    cards.value[lane] = cards.value[lane].filter(
      (elem) => elem.id !== idCard
    );
    deleteCard(idCard);
  }

  async function addCard(lane) {
    const row = converterLaneToRow(lane);
    const newCard = await createCard({
      row,
      text: cardsInputText[lane].text,
    });
    cards.value[lane].push({
      id: newCard.id,
      text: cardsInputText[lane].text,
    });
    cardsInputText[lane].text = '';
  }

  function removeCardsOwnRow(lane, removedIndex){
    cards.value[lane].splice(removedIndex, 1);
    cards.value[lane].forEach((element, index) => {
      element.row = converterLaneToRow(lane);
      element.seq_num = index;
      updateCard(element);
    });
  }

  function movingToAnother(lane, addedIndex, draggingCard){
    cards.value[lane].splice(addedIndex, 0, draggingCard.cardData);
    cards.value[lane].forEach((element, index) => {
      element.row = converterLaneToRow(lane);
      element.seq_num = index;
      updateCard(element);
    });
  }


  const setCardsInputTextChangeFlag = (flag, row) => {
    cardsInputText[row].flagAddCard = flag
  }

  function offInputText(row) {
    setCardsInputTextChangeFlag(false, row)
  }

  function onInputText(row) {
    setCardsInputTextChangeFlag(true, row)
  }

  function converterLaneToRow(lane) {
    switch (lane) {
      case 'onHold':
        return '0';
      case 'inProgress':
        return '1';
      case 'needReview':
        return '2';
      case 'approved':
        return '3';
    }
  }

  return {
    setCards,
    getCards,
    getCardsInputText,
    setCardsInputText,
    addCard,
    removeCard,
    removeCardsOwnRow,
    movingToAnother,
    deleteCard,
    offInputText,
    onInputText,
  }
},{ 
  persist:  {
    enabled: true
  }
})
