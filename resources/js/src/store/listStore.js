import axios from "axios";

const state = {
    userList: null,
    isDeletedList: false,
};

const getters = {
    userList: (state) => state.userList ?? [],
    isDeletedList: (state) => state.isDeletedList
};

const mutations = {
    SET_USER_LISTS(state, lists) {
        state.userList = lists;
    },
    SET_IS_DELETED_LIST(state, isDeleted) {
        state.isDeletedList = isDeleted;
    }
};

const actions = {
    async getUserList({commit}) {
        await axios.get('lists').then((response) => {
            commit('SET_USER_LISTS', response.data)
        })
    },

    async deleteListById({commit}, id) {
        await axios.delete(`lists/${id}`).then(response => {
            commit('SET_IS_DELETED_LIST', true);
        }).catch(response => {
            commit('SET_IS_DELETED_LIST', false);
        });
    },
    async updateList({commit}, list) {
        await axios.put(`lists/${list.id}`, list)
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
