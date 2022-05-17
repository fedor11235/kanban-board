<template>
  <!-- <Suspense> -->
    <Nuxt />
  <!-- </Suspense> -->
</template>
<script>
import { useContext } from '@nuxtjs/composition-api'
import { useUserStore } from '@/store/user';
import { useCardsStore } from '@/store/cards';
import { apiCards } from '@/api/cards';
import { apiUser } from '@/api/user';

export default {
  async setup() {
    const { refreshToken } = apiUser()
    const { getCards } = apiCards()
    const { $api } = useContext()
    const { getToken, setToken } = useUserStore();
    const { setCards } = useCardsStore();

    if (getToken === '') {
      // this.$router.replace({ path: '/' });

    } else {
      let result;
      try {
        console.log(getToken, 'getToken!')
        $api.defaults.headers.common['Authorization'] = `JWT ${getToken}`;
        result = await getCards();
        console.log(result)
      } catch {
        const result = await refreshToken(getToken);
        setToken (result.token);
        result =  await getCards();
      }

      const sortCard = {
        onHold: [],
        inProgress: [],
        needReview: [],
        approved: [],
      };

      for (const elem of result) {
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

      setCards(sortCard);
    }
  },
};
</script>