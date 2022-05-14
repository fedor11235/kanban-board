export default {
    async getCards(axios) {
        return await axios.get("/cards/");
    },

    async createCard(axios, payload) {
        const { row, text } = payload
        return await axios.post("/cards/", { row, text });
    },

    async refreshToken(axios, payload) {
        const { row, seq_num, text } = payload
        return await axios.patch("/users/refresh_token/", { row, seq_num, text });
    },

    async refreshToken(axios) {
        return await axios.delete("/cards/{id}/");
    },
};