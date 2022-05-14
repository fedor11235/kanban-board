export default {
    async getCards(axios) {
        return await axios.get("/cards/");
    },

    async createCard(axios, payload) {
        const { row, text } = payload
        console.log(payload)
        return await axios.post("/cards/", { row, text });
    },

    async updateCard(axios, payload) {
        const { row, seq_num, text } = payload
        console.log({ row, seq_num, text })
        console.log(payload)
        return await axios.patch(`/cards/${payload.id}/`, { row, seq_num, text });
    },

    async deleteCard(axios,idCard) {
        return await axios.delete(`/cards/${idCard}/`);
    },
};