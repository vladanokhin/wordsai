const state = {
    userList: null,
};

const getters = {
    userList: (state) => state.userList ?? [],
};

const mutations = {
    SET_USER_LISTS(state, lists) {
        state.userList = lists;
    }
};

const actions = {
    async getUserList({commit}) {
        await axios.get('lists').then((response) => {
            commit('SET_USER_LISTS', response.data)
        })
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
