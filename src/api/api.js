import httpClient from ".";

const API = {
    async getTodos() {
        const response = await httpClient.get('/get')
        return response.data
    },
    async updateTodo(id, payload) {
        const response = await httpClient.patch(`/patch/${id}`, payload)
        return response.data
    }
}

export default API

