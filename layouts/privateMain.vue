<template>
  <Nuxt />
</template>
<script>
import { useUserStore } from '@/store/user';
import { useCardsStore } from '@/store/cards';
import apiCards from '@/api/cards';
import apiUser from '@/api/user';

export default {
  async created() {
    const userStore = useUserStore();
    const cardsStore = useCardsStore();

    if (userStore.user.token === '') {
      this.$router.replace({ path: '/' });
    } else {
      this.$axios.defaults.headers.common['Authorization'] = `JWT ${userStore.user.token}`;

      let result;
      try {
        result = await apiCards.getCards(this.$axios);
      } catch {
        const result = await apiUser.refreshToken(this.$axios, userStore.user.token);
        userStore.user.token = result.data.token;
        this.$axios.defaults.headers.common['Authorization'] = `JWT ${userStore.user.token}`;
        result = await apiCards.getCards(this.$axios);
      }

      if (result.status) {
      }

      const sortCard = {
        onHold: [],
        inProgress: [],
        needReview: [],
        approved: [],
      };
      
      for (const elem of result.data) {
        if (elem.row === '0') {
          sortCard.onHold.push(elem);
        }
        if (elem.row === '1') {
          sortCard.inProgress.push(elem);
        }
        if (elem.row === '2') {
          sortCard.needReview.push(elem);
        }
        if (elem.row === '3') {
          sortCard.approved.push(elem);
        }
      }

      cardsStore.cards = sortCard;
    }
  },
};
</script>