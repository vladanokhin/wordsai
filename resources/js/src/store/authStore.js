import axios from "axios";
import _ from "lodash";

const state = {
    user: null,
    userId: localStorage.getItem('userId'),
};

const getters = {
    isAuthenticated: (state) => !!state.userId,
    user: (state) => state.user,
};

const mutations = {
    SET_USER(state, user) {
        state.user = _.isEmpty(user) || !user ? null : user;
        state.userId = user?.id;

        user
            ? localStorage.setItem('userId', state.userId)
            : localStorage.removeItem('userId');
    },

};

const actions = {
    async LogIn({commit}, form) {
        await axios.get('csrf-cookie').then(async response => {
            await axios.post("login", form).then((response) => {
                commit("SET_USER", response.data)
            });
        });
    },
    async SignUp({commit}, form) {
        await axios.post('register', form).then((response) => {
            commit("SET_USER", response.data)
        });
    },
    async CurrentUser({commit}) {
        await axios.get('user')
            .then(response => commit("SET_USER", response.data))
            .catch(response => commit("SET_USER", null))
    },

    async LogOut({ commit }) {
        await axios.post("logout")
            .then(response => commit("SET_USER", null));
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
