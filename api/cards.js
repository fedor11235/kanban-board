import { useContext } from '@nuxtjs/composition-api'

export const apiCards = () => {

  const { $api } = useContext()

  const getCards = async () => {
    return await $api.get('/cards/');
  }

  const createCard = async (payload) => {
    const { row, text } = payload
    return await $api.post('/cards/', { row, text });
  }

  const updateCard = async (payload) => {
    const { row, seq_num, text, id } = payload
    return await $api.patch(`/cards/${id}/`, { row, seq_num, text });
  }

  const deleteCard = async (idCard) => {
    return await $api.delete(`/cards/${idCard}/`);
  }

  return {
    getCards,
    createCard,
    updateCard,
    deleteCard
  }
};