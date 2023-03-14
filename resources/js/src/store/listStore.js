import axios from "axios";

const state = {
    userLists: {},
};

const getters = {
    userLists: (state) => state.userLists.sort((a, b) => b.countWords - a.countWords) ?? {},
    userListById: (state) => (id) => { return state.userLists.find(list => list.id ===  id) },
};

const mutations = {
    SET_USER_LISTS(state, lists) {
        state.userLists = lists;
    },
};

const actions = {
    async getUserList({commit}) {
        await axios.get('lists').then((response) => {
            commit('SET_USER_LISTS', response.data)
        });
    },

    async deleteListById({commit}, id) {
        return await axios.delete(`lists/${id}`).then(response => {
            commit('SET_USER_LISTS', response.data)
        });
    },
    async updateList({commit}, list) {
        await axios.put(`lists/${list.id}`, list).then(response => {
            commit('SET_USER_LISTS', response.data)
        });
    },
    async createNewList({commit}, list) {
        await axios.post('lists', list).then(response => {
            commit('SET_USER_LISTS', response.data)
        });
    },
    async deleteListItem({commit}, itemId) {
        return await axios.delete(`lists/words/${itemId}`).then(response => {
            commit('SET_USER_LISTS', response.data)
        });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
