import axios from "axios";
import _ from "lodash";
import {getCookieMap} from "@src/helpers/";

const state = {
    user: null,
    hasCookiesSession: Object.keys(getCookieMap()).includes('XSRF-TOKEN')
};

const getters = {
    isAuthenticated: (state) => state.hasCookiesSession,
    user: (state) => state.user,
    getUserData: (state) => (field, def) => (state.user ? state.user[field] : (def ? def : '')),
};

const actions = {

    async LogIn({commit}, form) {
        await axios.get('csrf-cookie').then(response => {
            axios.post("login", form)
                .then(response => commit("setUser", response.data));
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
            .then(response => commit("setUser", response.data))
            .catch(response => commit("setUser", null))
    },

    async ChangeProfile({commit}, user) {
        await axios.post("account-settings/update-general", user)
            .then(response => commit("setUser", response.data));
    },

    async UpdatePassword({commit}, form) {
        await axios.post("account-settings/update-password", form);
    },

    async LogOut({ commit }) {
        await axios.post("logout")
            .then(response => commit("setUser", null));
    }
};

const mutations = {
    setUser(state, user) {
        state.user = _.isEmpty(user) ? null : user;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
