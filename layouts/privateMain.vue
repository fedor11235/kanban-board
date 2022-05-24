<template>
  <!-- <Suspense> -->
    <Nuxt />
  <!-- </Suspense> -->
</template>
<script>
import { useContext, useRouter } from '@nuxtjs/composition-api'
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
    const router = useRouter();

    if (getToken === '') {
      router.push('/');
    } else {
      let result;
      try {
        $api.defaults.headers.common['Authorization'] = `JWT ${getToken}`;
        result = await getCards();
      } catch {
        const token = await refreshToken(getToken);
        $api.defaults.headers.common['Authorization'] = `JWT ${token.token}`;
        setToken (token.token);
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