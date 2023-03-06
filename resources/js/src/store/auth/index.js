import axios from "axios";
import _ from "lodash";
import {getCookieMap} from "@src/helpers/";

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

    async RestorePassword({commit}, form) {
        await axios.post("forgot-password", form);
    },

    async ResetPassword({commit}, form) {
        await axios.post("reset-password", form);
    },

    async CurrentUser({commit}) {
        await axios.get('user')
            .then(response => commit("SET_USER", response.data))
            .catch(response => commit("SET_USER", null))
    },

    async ChangeProfile({commit}, user) {
        await axios.post("account-settings/update-general", user)
            .then(response => commit("SET_USER", response.data));
    },

    async UpdatePassword({commit}, form) {
        await axios.post("account-settings/update-password", form);
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
